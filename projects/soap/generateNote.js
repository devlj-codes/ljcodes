import { soapDom } from "./DOM.js";
import { tags } from "./tags.js";

export const generateSubjective = (note) => {
    if (soapDom.subjectiveTxa.value) {
        note += tags.h1('Subjective') + tags.p(soapDom.subjectiveTxa.value);
    }
    return note;
}

export const generateObjective = (note) => {
    if (soapDom.objectiveTxa.value) {
        note += tags.h1('Objective') + tags.p(soapDom.objectiveTxa.value);
    }
    return note;
}

export const generateAssessment = (note) => {
    if (soapDom.assessmentTxa.value) {
        note += tags.h1('Assessment') + tags.p(soapDom.assessmentTxa.value);
    }
    return note;
}

export const generatePlan = (note) => {
    if (soapDom.planTxa.value) {
        note += tags.h1('Plan') + tags.p(soapDom.planTxa.value);
    }
    return note;
}