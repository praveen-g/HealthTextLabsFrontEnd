/*
* Created by Praveen Gupta
*/
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';


class AnDocument extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            markup: "Lab Notes : <br/>Admission Date:  [**2823-9-29**]              Discharge Date:   [**2823-10-17**]<br/><br/>Date of Birth:  [**2768-10-11**]             Sex:   F<br/><br/>Service: SURGERY<br/><br/>Allergies:<br/>Patient recorded as having No Known Allergies to Drugs<br/><br/>Attending:[**First Name3 (LF) 1**]<br/>Chief Complaint:<br/>headache and neck stiffness<br/><br/>Major Surgical or Invasive Procedure:<br/>central line placed, arterial line placed<br/><br/>History of Present Illness:<br/>54 year old female with recent diagnosis of <mark data-entity='problem'>ulcerative colitis</mark><br/>on <mark data-entity='medication'>6-mercaptopurine</mark>, <mark data-entity='medication'>prednisone</mark> 40-60 mg daily, who presents<br/>with a new onset of <mark data-entity='problem'>headache</mark> and neck <mark data-entity='problem'>stiffness</mark>. The patient is<br/>in <mark data-entity='problem'>distress</mark>, <mark data-entity='problem'>rigoring</mark> and has <mark data-entity='problem'>aphasia</mark> and only limited history<br/>is obtained. She reports that she was awaken 1AM the morning of<br/>[**2823-9-28**] with a <mark data-entity='problem'>headache</mark> which she describes as bandlike. She<br/>states that <mark data-entity='problem'>headaches</mark> are unusual for her. She denies <mark data-entity='problem'>photo</mark>- or<br/><mark data-entity='problem'>phonophobia</mark>. She did have neck <mark data-entity='problem'>stiffness</mark>. On arrival to the ED<br/>at 5:33PM, she was afebrile with a temp of 96.5, however she<br/>later spiked with temp to 104.4 (rectal), HR 91, BP 112/54, RR<br/>24, O2 sat 100 %. Head CT was done and relealved attenuation<br/>within the subcortical white matter of the <mark data-entity='bodyparts'>right medial frontal<br/>lobe</mark>. <mark data-entity='procedure'>LP</mark> was performed showing opening pressure 24 cm H2O WBC of<br/>316, Protein 152, glucose 16.  She was given <mark data-entity='medication'>Vancomycin</mark> 1 gm IV,<br/><mark data-entity='medication'>Ceftriaxone</mark> 2 gm IV, <mark data-entity='medication'>Acyclovir</mark> 800 mg IV, <mark data-entity='medication'>Ambesone</mark> 183 IV,<br/><mark data-entity='medication'>Ampicillin</mark> 2 gm IV q 4, <mark data-entity='medication'>Morphine</mark> 2-4 mg Q 4-6, <mark data-entity='medication'>Tylenol</mark> 1 gm ,<br/><mark data-entity='medication'>Decadron</mark> 10 mg IV.  The patient was evaluated by Neuro in the<br/>ED.<br/>.<br/>Of note, the patient was recently diagnosed with <mark data-entity='problem'>UC</mark> and was<br/>started on 6MP and a prednisone taper along with steroid enemas<br/>for <mark data-entity='problem'>UC</mark> treatment. She was on <mark data-entity='medication'>Bactrim</mark> in past but stopped taking<br/>it for unclear reasons and unclear how long ago.<br/>.<br/><br/><br/>Past Medical History:<br/><mark data-entity='problem'>chronic back pain</mark>, <mark data-entity='tests'>MRI</mark> <mark data-entity='negation'>negative</mark><br/><mark data-entity='problem'>osteopenia</mark> - fosamax d/c by PcP<br/><mark data-entity='problem'>leg pain</mark>/<mark data-entity='problem'>parasthesias</mark><br/>h/o <mark data-entity='problem'>hiatal hernia</mark><br/><br/>Social History:<br/>No tob, Etoh. Patient lives alone in a 2 family home w/ a<br/>friend. She is an administrative assistant<br/><br/><br/>Family History:<br/>brother w/ <mark data-entity='problem'>ulcerative proctitis</mark>, mother w/ <mark data-entity='severity'>severe</mark> <mark data-entity='problem'>arthritis</mark>,<br/>father w/ h/o <mark data-entity='problem'>colon polyps</mark> and <mark data-entity='problem'>GERD</mark><br/><br/>Physical Exam:<br/>VS: 101.4 ; 101/55;  87;  20;  100% at 2L NC<br/>Gen: Middle aged, ill-appearing woman, <mark data-entity='problem'>restless</mark> in bed,<br/><mark data-entity='problem'>rigoring</mark>, in <mark data-entity='severity'>moderate</mark> <mark data-entity='problem'>distress\t</mark><br/>HEENT: NC/AT, PEERL, MM dry, no lesions, OP clear, sclera<br/>non-icteric<br/><mark data-entity='problem'>Neck: stiff</mark>; palpable <mark data-entity='severity'>small</mark> <mark data-entity='problem'>LN</mark> in <mark data-entity='bodyparts'>right supraclavicular area</mark><br/>CV: regular, Nl S1, S2, 3/6 <mark data-entity='problem'>systolic murmur</mark> at left lower<br/>sternal border<br/>Pulm: <mark data-entity='problem'>crackles</mark> at base of <mark data-entity='bodyparts'>right lung\t</mark>\t<br/>Abd: + BS, <mark data-entity='severity'>soft</mark>, <mark data-entity='severity'>mildly</mark> <mark data-entity='severity'>tender</mark> in <mark data-entity='bodyparts'>periumbilical</mark> area, ND, <mark data-entity='negation'>no</mark><br/>rebound, <mark data-entity='negation'>no</mark> guarding\t<br/>Ext: 2+ <mark data-entity='problem'>bilateral pitting edema in lower extremities<br/>bilaterally</mark>,<mark data-entity='problem'> warm skin</mark>\t<br/>Skin: no <mark data-entity='problem'>exanthems\t</mark><br/>Neuro: A&O x3, <mark data-entity='problem'>expressive aphasia</mark>, <mark data-entity='bodyparts'>CN 2-12</mark> intact, patient has<br/>2+ patellar reflexes bilaterally, <mark data-entity='negation'>no</mark> <mark data-entity='problem'>gross motor</mark> or <mark data-entity='problem'>sensory<br/>deficits</mark>.<br/><br/>Pertinent Results:<br/>[**2823-9-28**] 05:55PM BLOOD WBC-6.5 RBC-2.64* Hgb-8.2* Hct-24.6*<br/>MCV-93 MCH-31.0 MCHC-33.3 RDW-20.1* Plt Ct-577*<br/>[**2823-9-28**] 05:55PM BLOOD Neuts-92.2* Bands-0 Lymphs-5.3*<br/>Monos-1.4* Eos-0.9 Baso-0.2<br/>[**2823-9-28**] 05:55PM BLOOD Hypochr-1+ Anisocy-1+ Poiklo-OCCASIONAL<br/>Macrocy-1+ Microcy-NORMAL Polychr-OCCASIONAL<br/>[**2823-9-28**] 05:55PM BLOOD PT-12.9 PTT-24.2 INR(PT)-1.1<br/>[**2823-9-30**] 04:52AM BLOOD Fibrino-782*<br/>[**2823-9-28**] 05:55PM BLOOD Glucose-111* UreaN-19 Creat-0.9 Na-140<br/>K-3.7 Cl-99 HCO3-29 AnGap-16<br/>[**2823-9-28**] 05:55PM BLOOD LD(LDH)-288*<br/>[**2823-9-29**] 05:14AM BLOOD ALT-28 AST-42* LD(LDH)-424* AlkPhos-33*<br/>Amylase-63 TotBili-0.6<br/>[**2823-9-30**] 04:52AM BLOOD ALT-25 AST-25 LD(LDH)-315* AlkPhos-34*<br/>TotBili-0.3<br/>[**2823-9-29**] 05:14AM BLOOD Lipase-25<br/>[**2823-9-29**] 05:14AM BLOOD Albumin-2.2* Calcium-7.5* Phos-3.6<br/>Mg-1.5* Iron-8*<br/>[**2823-10-3**] 06:43PM BLOOD Albumin-1.8* Calcium-7.7* Phos-3.6 Mg-1.7<br/>[**2823-9-29**] 05:14AM BLOOD calTIBC-152* Ferritn-298* TRF-117*<br/>[**2823-9-29**] 08:01PM BLOOD Type-ART Temp-38.9 Rates-/24 FiO2-100<br/>pO2-58* pCO2-33* pH-7.47* calHCO3-25 Base XS-0 AADO2-645 REQ<br/>O2-100 Intubat-NOT INTUBA<br/>[**2823-9-30**] 12:44AM BLOOD Type-ART Temp-39.1 Rates-/24 FiO2-100<br/>pO2-69* pCO2-35 pH-7.48* calHCO3-27 Base XS-2 AADO2-632 REQ<br/>O2-99 Intubat-NOT INTUBA Comment-NON-REBREA<br/>[**2823-9-30**] 04:18PM BLOOD Type-ART FiO2-100 pO2-222* pCO2-31*<br/>pH-7.47* calHCO3-23 Base XS-0 AADO2-478 REQ O2-79 Intubat-NOT<br/>INTUBA<br/>[**2823-9-30**] 04:38PM BLOOD Type-ART pO2-61* pCO2-33* pH-7.45<br/>calHCO3-24 Base XS-0 Intubat-NOT INTUBA<br/>[**2823-10-1**] 12:11AM BLOOD Type-ART Temp-37.6 Rates-/20 Tidal V-350<br/>FiO2-100 pO2-137* pCO2-35 pH-7.47* calHCO3-26 Base XS-2<br/>AADO2-559 REQ O2-90 Intubat-NOT INTUBA Vent-SPONTANEOU<br/>[**2823-10-1**] 10:29AM BLOOD Type-ART PEEP-8 pO2-89 pCO2-33* pH-7.51*<br/>calHCO3-27 Base XS-3 Intubat-NOT INTUBA<br/>[**2823-10-3**] 05:25AM BLOOD Type-ART Temp-38.4 Rates-/24 FiO2-100<br/>pO2-58* pCO2-36 pH-7.52* calHCO3-30 Base XS-5 AADO2-638 REQ<br/>O2-100 Intubat-NOT INTUBA<br/>[**2823-10-4**] 04:52AM BLOOD Type-ART Temp-37.3 Rates-0/24 O2 Flow-5<br/>pO2-64* pCO2-29* pH-7.50* calHCO3-23 Base XS-0<br/>[**2823-9-28**] 06:01PM BLOOD Lactate-2.1* K-3.4*<br/>[**2823-10-3**] 08:04PM BLOOD Lactate-0.8<br/>[**2823-9-30**] 08:41AM BLOOD freeCa-1.01*<br/>[**2823-10-4**] 04:16AM BLOOD WBC-9.4# RBC-3.77* Hgb-11.5* Hct-33.4*<br/>MCV-89 MCH-30.5 MCHC-34.5 RDW-20.0* Plt Ct-597*<br/>[**2823-9-29**] 05:14AM BLOOD WBC-7.6 RBC-2.16* Hgb-6.8* Hct-20.0*<br/>MCV-92 MCH-31.6 MCHC-34.2 RDW-20.0* Plt Ct-415<br/>[**2823-9-29**] 03:57PM BLOOD Hct-23.2*<br/>[**2823-9-30**] 04:11PM BLOOD WBC-5.1 RBC-2.60* Hgb-7.8* Hct-22.7*<br/>MCV-87 MCH-30.1 MCHC-34.4 RDW-21.0* Plt Ct-395<br/>[**2823-10-1**] 05:52AM BLOOD WBC-4.8 RBC-3.08* Hgb-9.0* Hct-26.5*<br/>MCV-86 MCH-29.2 MCHC-33.9 RDW-20.7* Plt Ct-409<br/>[**2823-10-3**] 06:43PM BLOOD Neuts-91.0* Bands-0 Lymphs-7.3*<br/>Monos-1.4* Eos-0.2 Baso-0<br/>[**2823-10-4**] 04:16AM BLOOD Plt Ct-597*<br/>[**2823-10-3**] 04:39AM BLOOD PT-12.2 PTT-22.6 INR(PT)-1.0<br/>[**2823-10-3**] 04:39AM BLOOD Plt Ct-498*<br/>[**2823-9-30**] 04:11PM BLOOD Plt Ct-395<br/>[**2823-10-4**] 04:16AM BLOOD Glucose-104 UreaN-19 Creat-1.1 Na-136<br/>K-4.1 Cl-104 HCO3-21* AnGap-15<br/>[**2823-10-3**] 06:43PM BLOOD Glucose-96 UreaN-20 Creat-0.9 Na-133<br/>K-4.3 Cl-100 HCO3-24 AnGap-13<br/>[**2823-10-2**] 04:41PM BLOOD Glucose-161* UreaN-15 Creat-1.0 Na-138<br/>K-4.3 Cl-99 HCO3-28 AnGap-15<br/>[**2823-10-1**] 05:52AM BLOOD Glucose-81 UreaN-16 Creat-0.8 Na-138<br/>K-5.0 Cl-106 HCO3-23 AnGap-14<br/>[**2823-9-30**] 04:52AM BLOOD Glucose-140* UreaN-13 Creat-0.9 Na-136<br/>K-4.3 Cl-103 HCO3-23 AnGap-14<br/>[**2823-9-29**] 05:14AM BLOOD Glucose-223* UreaN-21* Creat-1.0 Na-135<br/>K-4.3 Cl-99 HCO3-27 AnGap-13<br/>.<br/>.<br/>.<br/>Radiology:<br/>CXR [**9-28**]: Diffusely <mark data-entity='severity'>increased</mark> <mark data-entity='problem'>opacities</mark> at the <mark data-entity='bodyparts'>lung</mark> <mark data-entity='problem'>fields<br/>bilaterally.</mark> In an <mark data-entity='problem'>immunocompromised</mark> patient, this is concerning<br/>for PCP [**Name Initial (PRE) 2**]. Radiographically, the differential includes<br/><mark data-entity='bodyparts'>pulmonary</mark> <mark data-entity='problem'>edema</mark>. Additionally, there is a <mark data-entity='severity'>faint</mark> <mark data-entity='problem'>opacity</mark> at the<br/><mark data-entity='bodyparts'>right lung base</mark>, which may represent <mark data-entity='problem'>atelectasis</mark> or <mark data-entity='problem'>focal<br/>pneumonic</mark> process.<br/>.<br/>CT-Head [**9-28**]: Focus of <mark data-entity='severity'>low</mark> <mark data-entity='problem'>attenuation</mark> within the <mark data-entity='bodyparts'>subcortical<br/>white</mark> matter of the <mark data-entity='bodyparts'>right medial frontal lobe</mark>. This may<br/>represent a <mark data-entity='problem'>subacute infarction</mark>; however, an underlying mass<br/>lesion cannot be completely excluded. An MRI examination with<br/>gadolinium and diffusion-weighted imaging is recommended for<br/>further evaluation. No intracranial hemorrhage noted.<br/>.<br/>MR-head-w&w/o gadolinium [**9-30**]:<br/>Signal <mark data-entity='problem'>abnormality in the medial right frontal lobe</mark> involving<br/>the corpus callosum does not demonstrate enhancement. This<br/>finding most likely represent a small infarct. However, in<br/>absence of ADC map, age of the infarct could not be determined.<br/>No abnormal enhancement is seen. Follow up is suggested, if<br/>clinically indicated.<br/>.<br/>Echo [**9-30**]:<br/>1.The <mark data-entity='bodyparts'>left atrium</mark> is <mark data-entity='severity'>mildly</mark> <mark data-entity='problem'>dilated</mark>.<br/>2. Left ventricular wall thicknesses are normal. The left<br/>ventricular cavity size is normal. Regional left ventricular<br/>wall motion is normal. Overall left ventricular systolic<br/>function is normal (LVEF>55%).<br/>3. Right ventricular chamber size and free wall motion are<br/>normal.<br/>4. The aortic valve leaflets (3) appear structurally normal with<br/>good leaflet excursion. No masses or vegetations are seen on the<br/>aortic valve. There is no <mark data-entity='problem'>aortic valve stenosis</mark>. Trace <mark data-entity='problem'>aortic<br/>regurgitation</mark> is seen.<br/>5. The <mark data-entity='problem'>mitral valve leaflets are mildly thickened</mark>. No mass or<br/>vegetation is seen on the mitral valve. While difficult to<br/>assess given the limited views suspect Mild (1+) <mark data-entity='problem'>mitral<br/>regurgitation</mark> is seen.<br/>6.The estimated pulmonary artery systolic pressure is normal.<br/>7.There is no <mark data-entity='problem'>pericardial effusion</mark>.<br/>.<br/>If clinically indicated, would recommend a TEE.<br/>.<br/>CXR [**10-3**]:<br/>Resolution of congestive failure with persistent small bilateral<br/><mark data-entity='problem'>pleural effusions</mark> and <mark data-entity='problem'>bibasilar atelectasis</mark><br/>.<br/>Studies:<br/>EEG [**9-29**]: This is a mildly <mark data-entity='problem'>abnormal EEG</mark> due to the presence of<br/>a slow<br/>and disorganized background with bursts of generalized slowing -<br/>all<br/>consistent with a mild <mark data-entity='problem'>encephalopathy</mark> of toxic, metabolic, or<br/>anoxic<br/><mark data-entity='problem'>etiology</mark>. No evidence for ongoing <mark data-entity='problem'>seizures</mark> is seen.<br/><br/><br/>Brief Hospital Course:<br/>A/P:  54 woman on immunosuppressive therapy for UC (prednisone,<br/>6MP) who presents with new onset HA, <mark data-entity='problem'>fever with bacterial<br/>meningitis</mark> and <mark data-entity='problem'>gram positive rod bacteremia</mark>.<br/>.<br/>#. <mark data-entity='problem'>Listeriosis</mark> - <mark data-entity='problem'>meningitis and bacteremia</mark>. Patient presented<br/>with <mark data-entity='problem'>headache</mark>, <mark data-entity='problem'>nuchal rigidity</mark>, <mark data-entity='problem'>expressive aphasia</mark>, <mark data-entity='problem'>afebrile on</mark><br/>admission but temp to 104.4 in the ED, where she also started to<br/>have <mark data-entity='problem'>rigors</mark>.  LP showed >300 WBC, poly predominant with 5%<br/>monocytes, protein 152 glucose 16.  CSF gram stain showed <mark data-entity='problem'>gram<br/>positive rods</mark>, blood culture grew gram positive rods, speciation<br/>eventually grew <mark data-entity='problem'>listeria</mark>. Empiric treatment based on gram stain<br/>was started: ampicillin and bactrim (to cover both nocardia and<br/>question of PCP, [**Name10 (NameIs) 3**] below), vanc and ceftriaxone as well pending<br/>confirmation of gram stain and culture results.  Once<br/>speciations was confirmed, a five day course of gentamicin was<br/>started for synergy, and vancomycin and ceftriaxone d/c'd.<br/>Bactrim was maintained on treatment dose for concern for PCP<br/>[**Name Initial (PRE) 4**] [**10-3**], when it was changed to prophylaxis dose.  Early on<br/>admission, she developed <mark data-entity='problem'>hypotension</mark> that required levophed, but<br/>was weaned off of pressors within the first couple of days of<br/>admission with PRBCs (total of 4 units) and volume<br/>resussitation.  Given <mark data-entity='problem'>bacteremia</mark>, TTE was done, no <mark data-entity='problem'>vegetations</mark><br/>or <mark data-entity='problem'>lesions</mark> noted. Head CT on admission showed right medial<br/>frontal lobe likely infarct versus mass lesion, no <mark data-entity='problem'>hemorrhage</mark>.<br/>Subsequent MRI confirmed <mark data-entity='problem'>infarct</mark>, unclear date, and EEG<br/>consistent with <mark data-entity='problem'>meningitis</mark>.  Neurology was consulted, and the<br/>patient was placed on dilantin for <mark data-entity='problem'>seizure prophylaxis</mark> given<br/><mark data-entity='problem'>meningoencephalitis</mark>. She spiked <mark data-entity='problem'>fevers</mark> to 101-102 over the first<br/>several days of admission.  By [**10-1**], her neurological exam was<br/>markedly improved, and by [**10-3**] her <mark data-entity='problem'>headache</mark> was gone, no<br/>meningeal signs noted, although her baseline essential <mark data-entity='problem'>tremor</mark><br/>was slightly more severe. Surveillance blood cultures reamined<br/>negative from [**9-29**] on.  Notably, she was transferred from ICU<br/>to floor on [**10-3**], but <mark data-entity='problem'>noninvasive BP</mark> was read as 60/d, patient<br/>mentating well, sent back to ICU. In the ICU, an arterial line<br/>was placed, and consistently read 20-30 mmHg higher than<br/>sphyngomanometer.  This discrepancy was of unclear etiology, but<br/>persistent.  Patient maintained normal mentation, good urine<br/>output, no tachycardia, and it was judged that, for some unclear<br/>reason, the cuff pressures underestimated by 20-30 points.  On<br/>[**10-5**], she was sent to the floor for further care and management.<br/>.<br/>#. Bilateral lung <mark data-entity='problem'>opacities</mark>/<mark data-entity='problem'>hypoxia</mark>. Initial chest film read as<br/>increased opacities bilaterally concerning for PCP (given<br/>steroids and no PCP [**Name Initial (PRE) 5**]) vs. <mark data-entity='problem'>bacterial pneumonia</mark> vs. <mark data-entity='problem'>pulmonary<br/>edema</mark>. She had signifcant oxygen requirement, and her<br/><mark data-entity='problem'>respiratory distress</mark> led to her being placed on CPAP+PS.  The<br/>origin of her significant hypoxia was originally thought to be<br/>secondary to likely vascular leak from <mark data-entity='problem'>sepsis</mark>/<mark data-entity='problem'>CHF</mark> versus <mark data-entity='problem'>PCP</mark>. [**Name10 (NameIs) 6**]<br/>induced sputum was attempted, but was unsuccessful, and was not<br/>repeated initally given her unstable respiratory status, and<br/>susbsequent evaluation that likelihood of <mark data-entity='problem'>PCP</mark> was small.  She<br/>responded well to lasix diuresis, with reduced O2 requirements.<br/>.<br/>#. <mark data-entity='problem'>UC</mark>: She continued to receive her outpatient dose of<br/>prednisone, which was changed on [**10-4**] to dexamethasone IV; her<br/>outpatient 6-MP was held. After several days with no <mark data-entity='problem'>diarrhea</mark>,<br/>it recurred on [**10-4**] soon after her diet had advanced. <mark data-entity='problem'>C.diff</mark> was<br/>negative. She was made NPO, and fed via TPN for bowel rest.  On<br/>[**10-6**], it was noted that she began passing BRBRP, her hematocrit<br/>was noted to drop two points and pt was typed and crossed and<br/>consent for blood transfusion.<br/>.<br/>#. <mark data-entity='problem'>Anemia</mark>. On admission, she was found to be anemic. She<br/>received PRBCs for anemia on admission and again [**10-1**] for mixed<br/>venous sat <70%.  She was found to have iron binding studies c/w<br/>anemia of chronic disease.  Her HCT was followed closely, and<br/>remained stable for the remainder of her admission.<br/>.<br/>#. FEN: Her diet was advanced as tolerated, but she was made NPO<br/>with TPN on [**10-4**] after she developed <mark data-entity='problem'>diarrhea</mark>, thought secondary<br/>to continued UC activity.<br/>.<br/>#. Prophylaxis: PPI. Hold SQ Hep, <mark data-entity='problem'>pneumoboots</mark>. Initially on<br/>droplet precautions.<br/>.<br/>#. Code status: FULL<br/>.<br/>#. Communication: patient, her sister, brother, and mother<br/>.<br/>#. Lines: peripheral IV x 2. left subclavian CC.  A-line. Eval<br/>for PICC; once in place, can d/c central line, a-line.<br/><br/>Surgery Discharge part:<br/>Pt underwent total abdominal colectomy with ileoostomy on<br/>[**2823-10-8**].  She was on Clinda/Gent peri-procedure and Amplicillin<br/>for 21 days at first.  She was seen by PT/OT and was NPO until<br/>the ostomy started to function.  SHe had c/o nausea as diet was<br/>tolerated and it was slowed down.  MRI was suspicious for an<br/>abcess and amplicillin was started for at least a total of 6<br/>weeks as per ID.  She was given a PICC.  On [**10-17**] she was<br/>cleared by PT and was in good condition for d/c to rehab on<br/>[**2823-10-17**].<br/><br/><br/>Medications on Admission:<br/>AMBIEN 10 mg--1 tablet(s) by mouth at bedtime<br/>CLONAZEPAM 1 MG--One twice a day<br/>FLUOXETINE 20 MG--2 every day<br/>FOSAMAX 70MG--One qweek as directed<br/>FUROSEMIDE 20 mg--1 tablet(s) by mouth once a day<br/>MERCAPTOPURINE 50 mg--1 tablet(s) by mouth twice a day<br/>PREDNISONE 20 mg--2 tablet(s) by mouth once a day as per<br/>gastroenterologist<br/>PROTONIX 40 mg--1 tablet(s) by mouth once a day<br/><br/>Discharge Medications:<br/>1. Acetaminophen 325 mg Tablet Sig: One (1) Tablet PO Q4-6H<br/>(every 4 to 6 hours) as needed.<br/>2. Trimethoprim-Sulfamethoxazole 160-800 mg Tablet Sig: One (1)<br/>Tablet PO QMOWEFR (Monday -Wednesday-Friday).<br/>3. Hydromorphone 2 mg Tablet Sig: One (1) Tablet PO Q2-4HPRN ().<br/><br/>4. Zolpidem 5 mg Tablet Sig: One (1) Tablet PO HS (at bedtime).<br/><br/>5. Pantoprazole 40 mg Tablet, Delayed Release (E.C.) Sig: One<br/>(1) Tablet, Delayed Release (E.C.) PO Q24H (every 24 hours).<br/>6. Clonazepam 1 mg Tablet Sig: One (1) Tablet PO BID (2 times a<br/>day).<br/>7. Fluoxetine 20 mg Capsule Sig: One (1) Capsule PO DAILY<br/>(Daily).<br/>8. Alendronate 70 mg Tablet Sig: One (1) Tablet PO QTHUR (every<br/>Thursday).<br/>9. Furosemide 20 mg Tablet Sig: One (1) Tablet PO DAILY (Daily).<br/><br/>10. Albuterol Sulfate 0.083 % Solution Sig: One (1)  Inhalation<br/>Q6H (every 6 hours) as needed.<br/>11. Ipratropium Bromide 0.02 % Solution Sig: One (1)  Inhalation<br/>Q6H (every 6 hours) as needed.<br/>12. Dolasetron Mesylate 12.5 mg IV Q8H:PRN<br/>13. Ampicillin Sodium 2 g Recon Soln Sig: One (1) Recon Soln<br/>Injection Q4H (every 4 hours): Please take until at least<br/>[**11-9**].  You will be further instructed by the infectious<br/>disease doctors.<br/>14. PREDNISONE TAPER<br/>(see included sheet)<br/>10 mg in morning and 10 mg in evening for 3 days<br/>Next take 10 mg in the morning and 7.5 mg in evening for 3 days<br/>Next take 7.5 mg in the morning and 7.5 mg in the eveing for 3<br/>days<br/>Then take 7.5 mg in the morning and 5 mg in the evening<br/>Next take 5 mg in the morning and 5 mg in the evening for 3 days<br/>Then take 5 mg in the morning and 2.5 mg in the evening for 3<br/>days<br/>Next take 2.5 mg in the morning and 2.5 mg in the evening for 3<br/>days<br/>Finally take 2.5 mg in the morning and none in the evening for 3<br/>days.<br/>Then take no more prednisone<br/><br/><br/>Discharge Disposition:<br/>Extended Care<br/><br/>Facility:<br/>[**Hospital3 7**] & Rehab Center - [**Hospital1 8**]<br/><br/>Discharge Diagnosis:<br/><mark data-entity='problem'>Listeria meningitis</mark><br/><mark data-entity='problem'>Ulcerative colitis</mark><br/><br/><br/>Discharge Condition:<br/>Stable<br/><br/><br/>Discharge Instructions:<br/>Please call your doctor if you have a <mark data-entity='problem'>fever </mark>>101.4, <mark data-entity='problem'>inability to<br/>pass gas</mark> or <mark data-entity='problem'>stool into the ostomy</mark>, <mark data-entity='severity'>severe</mark> <mark data-entity='problem'>pain</mark>, <mark data-entity='severity'>persistent</mark><br/><mark data-entity='problem'>nausea</mark>, <mark data-entity='problem'>vomiting</mark>, or any other concerns. Please take all<br/>medications as prescribed and complete the course of<br/>antibiotics.<br/><br/>Followup Instructions:<br/>Please make an appointment to see Dr. [**Last Name (STitle) **] in <mark data-entity='datetime'>2 weeks</mark>,<br/>telephone [**Telephone/Fax (1) 9**]. Please follow up with your primary care<br/>MD in <mark data-entity='datetime'>[**12-4**] weeks</mark>.<br/>You have an appointment with Infectious disease on [**11-6**] ([**Telephone/Fax (1) 10**].<br/>You have an <mark data-entity='tests'>MRI</mark>",
        };
    }

    render() {
        var style={
            textAlign: 'left',
            padding:'2%',

        }
        return (
            <Paper zDepth={1}>
                <div id="displacy" style={style}>Loading...</div>
            </Paper>
        );
    }

    componentDidMount(){
        var el = document.getElementById("displacy")
        el.innerHTML= this.state.markup
    }


}
export default AnDocument;