const dialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogMeta = document.querySelector("#dialog-meta");
const dialogDescription = document.querySelector("#dialog-description");
const dialogContribution = document.querySelector("#dialog-contribution");
const dialogStack = document.querySelector("#dialog-stack");
const dialogAccess = document.querySelector("#dialog-access");
const dialogLink = document.querySelector("#dialog-link");
const closeButton = document.querySelector(".dialog-close");
let lastTrigger = null;

function openProject(card, trigger) {
  if (!dialog || !card) return;

  lastTrigger = trigger;
  dialogTitle.textContent = card.querySelector("h3")?.textContent.trim() || "Project details";
  dialogMeta.textContent = card.dataset.dialogMeta || "Case study";
  dialogDescription.textContent = card.dataset.dialogDescription || card.querySelector("[data-project-description]")?.textContent.trim() || card.querySelector("p")?.textContent.trim() || "";
  dialogContribution.textContent = card.dataset.dialogContribution || "";
  dialogStack.textContent = card.dataset.dialogStack || "";
  dialogAccess.textContent = card.dataset.dialogAccess || "";

  if (card.dataset.dialogUrl) {
    dialogLink.href = card.dataset.dialogUrl;
    dialogLink.hidden = false;
  } else {
    dialogLink.removeAttribute("href");
    dialogLink.hidden = true;
  }

  dialog.showModal();
}

function closeProject() {
  if (!dialog) return;

  dialog.close();
  lastTrigger?.focus();
}

document.querySelectorAll("[data-project] .project-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openProject(trigger.closest("[data-project]"), trigger);
  });
});

closeButton?.addEventListener("click", closeProject);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});
dialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeProject();
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
