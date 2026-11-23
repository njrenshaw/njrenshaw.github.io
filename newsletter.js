"use strict";

// Add only Nora's confirmed public URLs and newsletter handle. No secrets belong here.
const noraChannels = {
  buttondownUsername: "",
  newsletterPrivacyUrl: "",
  reddit: "https://www.reddit.com/user/NoraBetweenCities/",
  fanvue: "",
};

const preview = location.protocol === "file:" || ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
const socialSources = new Set(["facebook", "youtube", "instagram", "reddit"]);
const parameters = new URLSearchParams(location.search);
const normalizeSource = (value) => socialSources.has(value) ? value : "direct";
const byId = (id) => document.getElementById(id);

function httpsUrl(value, allowedHosts = []) {
  if (!URL.canParse(value)) return null;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password) return null;
  return !allowedHosts.length || allowedHosts.includes(url.hostname) ? url : null;
}

const subscription = byId("city-notes-form");
const sourceField = subscription.elements.namedItem("metadata__signup_source");
const privacyUrl = httpsUrl(noraChannels.newsletterPrivacyUrl);
const hasNewsletter = /^[a-z0-9][a-z0-9_-]*$/i.test(noraChannels.buttondownUsername) && privacyUrl;
sourceField.value = normalizeSource(parameters.get("utm_source")?.toLowerCase());

if (hasNewsletter) {
  subscription.action = `https://buttondown.com/api/emails/embed-subscribe/${noraChannels.buttondownUsername}`;
  byId("city-notes-privacy").href = privacyUrl.href;
  byId("city-notes-privacy").hidden = false;
}

if (hasNewsletter || preview) {
  byId("city-notes").hidden = false;
  byId("city-notes-link").hidden = false;
}

for (const platform of ["reddit", "fanvue"]) {
  const url = httpsUrl(noraChannels[platform], [`${platform}.com`, `www.${platform}.com`]);
  if (url && url.pathname !== "/") {
    const link = byId(`${platform}-profile`);
    link.href = url.href;
    link.hidden = false;
  } else if (preview) {
    byId(`${platform}-status`).hidden = false;
  } else {
    continue;
  }
  byId(`${platform}-platform`).hidden = false;
  byId("beyond-films").hidden = false;
}

if (preview) {
  const sourceSelector = byId("signup-preview-source");
  const previewStatus = byId("preview-status");
  const confirmation = byId("preview-confirmation");
  const confirm = byId("preview-confirm");
  const reset = byId("preview-reset");
  const email = byId("city-notes-email");
  const previewSubmit = subscription.querySelector("button");

  function updatePreviewSource() {
    const source = normalizeSource(sourceSelector.value);
    sourceField.value = source;
    const campaignLink = new URL("https://norabetweencities.com/#city-notes");
    if (source !== "direct") {
      campaignLink.searchParams.set("utm_source", source);
      campaignLink.searchParams.set("utm_medium", "social");
      campaignLink.searchParams.set("utm_campaign", "city_notes");
    }
    byId("signup-preview-link").textContent = campaignLink.href;
  }

  byId("signup-preview-tools").hidden = false;
  sourceSelector.value = sourceField.value === "direct" && !parameters.has("utm_source") ? "instagram" : sourceField.value;
  sourceSelector.addEventListener("change", updatePreviewSource);
  updatePreviewSource();

  function showPreviewConfirmation() {
    if (!subscription.reportValidity()) return;
    email.value = "";
    subscription.hidden = true;
    confirmation.hidden = false;
    confirm.focus();
  }

  previewSubmit.type = "button";
  previewSubmit.addEventListener("click", showPreviewConfirmation);
  email.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.isComposing) return;
    event.preventDefault();
    showPreviewConfirmation();
  });
  confirm.addEventListener("click", () => {
    previewStatus.textContent = "You’re on the City Notes list. This is a preview confirmation.";
    confirm.hidden = true;
    reset.hidden = false;
    reset.focus();
  });
  reset.addEventListener("click", () => {
    confirmation.hidden = true;
    confirm.hidden = false;
    reset.hidden = true;
    previewStatus.textContent = "Check your inbox to confirm your subscription.";
    subscription.hidden = false;
    email.focus();
  });
}
