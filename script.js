const solutionData = {
  bi: {
    kicker: "Data. Insight. Impact.",
    title: "Dashboards that drive growth",
    copy:
      "Give Sales, Marketing, and Finance teams real-time visibility into performance, profitability, campaign results, and cash flow.",
    list: [
      "Interactive Power BI dashboards",
      "Data integration from spreadsheets, ERP, CRM, and accounting tools",
      "Automated reporting with useful alerts"
    ],
    image: "assets/dislat-dashboards-clipped.png",
    alt: "Dislat dashboard design showing analytics for sales, marketing, and finance",
    cta: "View BI dashboard product",
    url: "products/business-intelligence.html"
  },
  platform: {
    kicker: "Powerful business apps",
    title: "Microsoft Power Platform solutions",
    copy:
      "Automate approvals, build custom apps, streamline business processes, and connect everyday work across teams.",
    list: [
      "Power Apps for internal tools",
      "Power Automate workflows and approvals",
      "Power BI reporting and Power Virtual Agents"
    ],
    image: "assets/dislat-power-platform-clipped.png",
    alt: "Microsoft Power Platform automation poster by Dislat Solutions",
    cta: "View Power Platform product",
    url: "products/power-platform.html"
  },
  finance: {
    kicker: "Better financial control",
    title: "Finance and accounting systems",
    copy:
      "Improve budgeting, reporting, forecasting, cash flow visibility, and management decision-making with practical finance tools.",
    list: [
      "Budget templates and tracker dashboards",
      "Cash flow and profitability reporting",
      "Accounting workflow support"
    ],
    image: "assets/dislat-budget-template-clipped.png",
    alt: "Personal finance budget template poster with dashboard mockups",
    cta: "View finance template product",
    url: "products/finance-templates.html"
  },
  automation: {
    kicker: "Simpler operations",
    title: "Workflow and process automation",
    copy:
      "Replace repetitive tasks with structured workflows that reduce bottlenecks and keep approvals moving.",
    list: [
      "Approval routing and task tracking",
      "Document and notification automation",
      "Process review before implementation"
    ],
    image: "assets/dislat-automation.png",
    alt: "Dislat automation consultation poster showing smart business solutions",
    cta: "View workflow automation product",
    url: "products/workflow-automation.html"
  },
  compliance: {
    kicker: "Lower risk",
    title: "Compliance and advisory support",
    copy:
      "Strengthen controls, standardize reporting, and keep business processes aligned with finance and tax requirements.",
    list: [
      "Tax and compliance support",
      "Internal controls and risk reviews",
      "Management reporting packs"
    ],
    image: "assets/dislat-brochure.png",
    alt: "Dislat Solutions brochure with services, benefits, and framework",
    cta: "View compliance advisory product",
    url: "products/compliance-advisory.html"
  },
  payroll: {
    kicker: "Payroll with confidence",
    title: "Payroll automation and employee self-service",
    copy:
      "Automate payroll processing, statutory exports, payslips, and approval controls for cleaner monthly operations.",
    list: [
      "PAYE, NSSF, SHIF, and P9 workflow support",
      "Maker-checker controls",
      "Employee payslips and self-service"
    ],
    image: "assets/dislat-payroll-clipped.png",
    alt: "Mshahara Pro payroll automation poster",
    cta: "View payroll product",
    url: "products/payroll-systems.html"
  }
};

const methodData = {
  remove: {
    label: "Remove",
    title: "Clear the operational drag your team has learned to tolerate.",
    copy:
      "We identify duplicated entry, manual approvals, scattered files, and spreadsheet-only reporting that quietly drains productivity.",
    points: ["Manual work", "Paper processes", "Data silos"]
  },
  reduce: {
    label: "Reduce",
    title: "Lower the cost, risk, and uncertainty inside daily operations.",
    copy:
      "We tighten controls, standardize workflows, reduce avoidable errors, and give teams cleaner information before decisions are made.",
    points: ["Costs", "Errors", "Compliance burden"]
  },
  accelerate: {
    label: "Accelerate",
    title: "Move from delayed reporting to timely action.",
    copy:
      "We build practical dashboards, automated workflows, and connected systems that help leaders see what is happening and act sooner.",
    points: ["Decision-making", "Productivity", "Business growth"]
  }
};

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const solutionButtons = document.querySelectorAll("[data-solution]");
const solutionKicker = document.querySelector("[data-solution-kicker]");
const solutionTitle = document.querySelector("[data-solution-title]");
const solutionCopy = document.querySelector("[data-solution-copy]");
const solutionList = document.querySelector("[data-solution-list]");
const solutionImage = document.querySelector("[data-solution-image]");
const solutionCta = document.querySelector("[data-solution-cta]");

solutionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-solution");
    const data = solutionData[key];
    if (!data) return;

    solutionButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    solutionKicker.textContent = data.kicker;
    solutionTitle.textContent = data.title;
    solutionCopy.textContent = data.copy;
    solutionImage.src = data.image;
    solutionImage.alt = data.alt;
    solutionCta.textContent = data.cta;
    solutionCta.href = data.url;

    solutionList.replaceChildren(
      ...data.list.map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      })
    );
  });
});

const methodButtons = document.querySelectorAll("[data-method]");
const methodLabel = document.querySelector("[data-method-label]");
const methodTitle = document.querySelector("[data-method-title]");
const methodCopy = document.querySelector("[data-method-copy]");
const methodPoints = document.querySelector("[data-method-points]");

methodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-method");
    const data = methodData[key];
    if (!data) return;

    methodButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    methodLabel.textContent = data.label;
    methodTitle.textContent = data.title;
    methodCopy.textContent = data.copy;
    methodPoints.replaceChildren(
      ...data.points.map((point) => {
        const span = document.createElement("span");
        span.textContent = point;
        return span;
      })
    );
  });
});

const estimator = document.querySelector("[data-estimator]");

function formatKes(value) {
  return `KES ${new Intl.NumberFormat("en-KE", {
    maximumFractionDigits: 0
  }).format(value)}`;
}

function updateEstimate() {
  if (!estimator) return;

  const people = Number(estimator.querySelector('[data-input="people"]').value) || 0;
  const hours = Number(estimator.querySelector('[data-input="hours"]').value) || 0;
  const rate = Number(estimator.querySelector('[data-input="rate"]').value) || 0;
  const share = Number(estimator.querySelector('[data-input="share"]').value) || 0;
  const monthlyHours = Math.round(people * hours * 4.33 * (share / 100));
  const monthlyValue = monthlyHours * rate;

  estimator.querySelector("[data-share-output]").textContent = String(share);
  estimator.querySelector('[data-result="hours"]').textContent = new Intl.NumberFormat("en-KE").format(monthlyHours);
  estimator.querySelector('[data-result="value"]').textContent = formatKes(monthlyValue);
}

if (estimator) {
  estimator.addEventListener("input", updateEstimate);
  updateEstimate();
}
