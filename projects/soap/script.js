import { soapDom } from "./DOM.js";
import { generateHeading, generateGeneralInfo, generateSubjective, generateObjective, generateAssessment, generatePlan } from "./generateNote.js";


initFieldsetStates(soapDom.fieldsets);
initGeneratePreview();


function initFieldsetStates(fieldsets) {
    fieldsets.forEach(el => {
        let fieldsetBody = el.querySelector('div');
        let fieldsetLegend = el.querySelector('legend');
        el.classList.add('close');
        fieldsetBody.classList.add('d-none');

        fieldsetLegend.addEventListener('click', function() {
            if (el.classList.contains('close')) {
                el.classList.remove('close');
                el.classList.add('open');
                fieldsetBody.classList.remove('d-none');
            } else {
                el.classList.add('close');
                fieldsetBody.classList.add('d-none');
            }
        });
    });

}

function initGeneratePreview() {
    document.addEventListener('change', function() {
        let note = '';
        note = generateHeading(note);
        note = generateGeneralInfo(note);
        note = generateSubjective(note);
        note = generateObjective(note);
        note = generateAssessment(note);
        note = generatePlan(note);
        document.querySelector('#printNote').innerHTML = note;
    });
}