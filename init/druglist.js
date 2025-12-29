import mongoose from 'mongoose';
import Drug from '../models/druglist.js';
const drugData = [
    {
        "name": "C & C 2.5/30 MG Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/c-c-2530-mg-syrup-60-ml-tm-syup1-000803"
    },
    {
        "name": "C & C 5/60 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-c-560-mg-tablet-10-tm-tacr1-005922"
    },
    {
        "name": "C & C Dx 5/2/10 MG Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/c-c-dx-5210-mg-syrup-100-ml-tm-syup1-009968"
    },
    {
        "name": "C 10 Cold Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-10-cold-tablet-10-tm-tacr1-066263"
    },
    {
        "name": "C 37 150 MG Drops 15 ML",
        "link": "https://www.truemeds.in/medicine/c-37-150-mg-drops-15-ml-tm-dohe1-000114"
    },
    {
        "name": "C 37 250 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/c-37-250-mg-suspension-60-ml-tm-sury1-002510"
    },
    {
        "name": "C 37 500 MG Tablet 10",
        "link": "https://www.truemeds.in/otc/c-37-500-mg-tablet-10-tm-tacr1-005923"
    },
    {
        "name": "C 37 Ds 250 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/c-37-ds-250-mg-suspension-60-ml-tm-sury1-000298"
    },
    {
        "name": "C 3one Sb 1000/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-3one-sb-1000500-mg-injection-1-tm-inon2-013371"
    },
    {
        "name": "C Art Eye Drops 10ml",
        "link": "https://www.truemeds.in/medicine/c-art-05-eye-drops-10-ml-tm-eynt2-000181"
    },
    {
        "name": "C Bac 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-bac-20-mg-tablet-10-tm-tacr1-069421"
    },
    {
        "name": "C Bact 500/500mg Injection 1",
        "link": "https://www.truemeds.in/medicine/c-bact-500500-mg-injection-1-tm-inon2-013167"
    },
    {
        "name": "C Bactum 1000/1000 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-bactum-10001000-mg-injection-1-tm-inon2-000990"
    },
    {
        "name": "C Bactum 500/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-bactum-500500-mg-injection-1-tm-inon2-000991"
    },
    {
        "name": "C Bactum Forte 1000/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-bactum-forte-1000500-mg-injection-1-tm-inon2-000992"
    },
    {
        "name": "C Bactum Forte 2000/1000 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-bactum-forte-20001000-mg-injection-1-tm-inon2-012558"
    },
    {
        "name": "A 1 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-1-5-mg-tablet-10-tm-tacr1-057031"
    },
    {
        "name": "A 125 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/a-125-mg-suspension-60-ml-tm-sury1-002392"
    },
    {
        "name": "A 24 250 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/a-24-250-mg-tablet-6-tm-tacr1-000043"
    },
    {
        "name": "A 250 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/a-250-mg-suspension-60-ml-tm-sury1-002323"
    },
    {
        "name": "A 3 100/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-3-100500-mg-tablet-10-tm-tacr1-000046"
    },
    {
        "name": "A And D Capsule 10",
        "link": "https://www.truemeds.in/otc/a-and-d-capsule-10-tm-cacr1-016597"
    },
    {
        "name": "A Art 150 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/a-art-150-mg-injection-2-ml-tm-inon2-010814"
    },
    {
        "name": "A Arti L 80/480 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-arti-l-80480-mg-tablet-10-tm-tacr1-059919"
    },
    {
        "name": "A Artivid 150 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/a-artivid-150-mg-injection-2-ml-tm-inon2-010986"
    },
    {
        "name": "A Balnc Glow Shots 5ml Pack Of 15 Bottles",
        "link": "https://www.truemeds.in/otc/a-balnc-glow-shots-5ml-pack-of-15-bottles-tm-bott1-000069"
    },
    {
        "name": "A Bec Tablet 30",
        "link": "https://www.truemeds.in/medicine/a-bec-300-mg-tablet-30-tm-tacr1-000047"
    },
    {
        "name": "A Bex Junior Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/a-bex-junior-syrup-60-ml-tm-syup1-008961"
    },
    {
        "name": "A Bex Sf Expectorant 100 ML",
        "link": "https://www.truemeds.in/medicine/a-bex-sf-expectorant-100-ml-tm-exnt1-000250"
    },
    {
        "name": "A Bex Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/a-bex-syrup-100-ml-tm-syup1-008480"
    },
    {
        "name": "A C Ford 200 MG Tablet 4",
        "link": "https://www.truemeds.in/medicine/a-c-ford-200-mg-tablet-4-tm-tacr1-056015"
    },
    {
        "name": "A C Ford Kid 200 MG Tablet 4",
        "link": "https://www.truemeds.in/medicine/a-c-ford-kid-200-mg-tablet-4-tm-tacr1-060903"
    },
    {
        "name": "D 1000 Cal Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-1000-cal-500-mg1000iu-tablet-10-tm-tacr1-010128"
    },
    {
        "name": "D 25 % Infusion 100 ML",
        "link": "https://www.truemeds.in/medicine/d-25-infusion-100-ml-tm-iner1-000102"
    },
    {
        "name": "D 3 Bon Chewable Tablet 2",
        "link": "https://www.truemeds.in/medicine/d-3-bon-chewable-tablet-2-tm-tacr1-050485"
    },
    {
        "name": "D 3 Bon Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-3-bon-1250-mg250iu-tablet-10-tm-tacr1-010129"
    },
    {
        "name": "D 360 400 IU Drops 30 ML",
        "link": "https://www.truemeds.in/otc/d-360-400-iu-drops-30-ml-tm-dohe1-000254"
    },
    {
        "name": "D 360 Capsule 4",
        "link": "https://www.truemeds.in/medicine/d-360-60000-iu-capsule-4-tm-cacr1-001227"
    },
    {
        "name": "D 360 Granules 1gm",
        "link": "https://www.truemeds.in/otc/d-360-60000-iu-granules-1-gm-tm-gres1-000030"
    },
    {
        "name": "D Acne Foaming Face Wash 60ml",
        "link": "https://www.truemeds.in/otc/d-acne-foaming-152-facewash-60-ml-tm-fash1-000009"
    },
    {
        "name": "D Acne Gel 10gm",
        "link": "https://www.truemeds.in/otc/d-acne-1-gel-10-gm-tm-geel1-000313"
    },
    {
        "name": "D Acne I 10 Capsule 10",
        "link": "https://www.truemeds.in/medicine/d-acne-i-10-mg-capsule-10-tm-cacr1-001228"
    },
    {
        "name": "D Acne I 20 Capsule 10",
        "link": "https://www.truemeds.in/medicine/d-acne-i-20-mg-capsule-10-tm-cacr1-001229"
    },
    {
        "name": "D Acne Plus Gel 15gm",
        "link": "https://www.truemeds.in/medicine/d-acne-plus-0514-gel-15-gm-tm-geel1-001867"
    },
    {
        "name": "D Acne Plus Gel 20gm",
        "link": "https://www.truemeds.in/medicine/d-acne-plus-gel-20-gm-tm-geel1-002449"
    },
    {
        "name": "D Acne Soap 75gm",
        "link": "https://www.truemeds.in/otc/d-acne-soap-75-gm-tm-soap1-000221"
    },
    {
        "name": "D Acne Soft Face Wash 100gm",
        "link": "https://www.truemeds.in/otc/d-acne-soft-face-wash-100gm-tm-fash1-000726"
    },
    {
        "name": "D Acne Soft Foaming Face Wash 100gm",
        "link": "https://www.truemeds.in/medicine/d-acne-soft-facewash-100-gm-tm-fash1-000065"
    },
    {
        "name": "B 12 Film Orally Disintegrating Strips 10",
        "link": "https://www.truemeds.in/otc/b-12-film-orally-disintegrating-strips-10-tm-dien1-000036"
    },
    {
        "name": "B 29 Aq Injection 1ml",
        "link": "https://www.truemeds.in/medicine/b-29-aq-500-mcg-injection-1-ml-tm-inon2-000632"
    },
    {
        "name": "B 29 Aq Pfs Injection 1ml",
        "link": "https://www.truemeds.in/medicine/b-29-aq-pfs-injection-1-ml-tm-inon2-014785"
    },
    {
        "name": "B 29 Daily Tablet 10",
        "link": "https://www.truemeds.in/otc/b-29-daily-tablet-10-tm-tacr1-050154"
    },
    {
        "name": "B 29 Daily Tablet 14",
        "link": "https://www.truemeds.in/otc/b-29-daily-tablet-14-tm-tacr1-050153"
    },
    {
        "name": "B 29 Daily Tablet 15",
        "link": "https://www.truemeds.in/otc/b-29-daily-tablet-15-tm-tacr1-053472"
    },
    {
        "name": "B 29 Fast Mouth Dissolving 1500mcg Strips 10",
        "link": "https://www.truemeds.in/medicine/b-29-fast-mouth-dissolving-1500-mcg-strips-10-tm-stps1-000001"
    },
    {
        "name": "B 29 Gold Aq Injection 2ml",
        "link": "https://www.truemeds.in/medicine/b-29-gold-aq-injection-2-ml-tm-inon2-009823"
    },
    {
        "name": "B 29 Gold Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-29-gold-tablet-10-TM-TACR1-050155"
    },
    {
        "name": "B 29 Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/b-29-injection-1-ml-tm-inon2-009049"
    },
    {
        "name": "B 29 Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/b-29-injection-2-ml-tm-inon2-009050"
    },
    {
        "name": "B 29 Lc Tablet 10",
        "link": "https://www.truemeds.in/otc/b-29-lc-tablet-10-tm-tacr1-050156"
    },
    {
        "name": "B 29 Lc Tablet 15",
        "link": "https://www.truemeds.in/medicine/b-29-lc-tablet-15-tm-tacr1-108442"
    },
    {
        "name": "B 29 Liquid 200ml",
        "link": "https://www.truemeds.in/otc/b-29-syrup-200-ml-tm-syup1-000589"
    },
    {
        "name": "B 29 Max Capsule 10",
        "link": "https://www.truemeds.in/medicine/b-29-max-capsule-10-tm-cacr1-010218"
    },
    {
        "name": "B 29 Max Capsule 15",
        "link": "https://www.truemeds.in/otc/b-29-max-capsule-15-tm-cacr1-013556"
    },
    {
        "name": "E 2 2mg Tablet 18",
        "link": "https://www.truemeds.in/medicine/e-2-2-mg-tablet-18-tm-tacr1-012581"
    },
    {
        "name": "E 400 Capsule 10",
        "link": "https://www.truemeds.in/medicine/e-400-mg-softgel-capsule-10-tm-cacr1-009993"
    },
    {
        "name": "E Amox 500 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/e-amox-500-mg-capsule-10-tm-cacr1-012234"
    },
    {
        "name": "E Amox Cl 625 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/e-amox-cl-625-mg-tablet-6-tm-tacr1-097177"
    },
    {
        "name": "E Aps 60 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/e-aps-60-mg-injection-1-tm-inon2-002517"
    },
    {
        "name": "E Bact 500/500mg Injection 1",
        "link": "https://www.truemeds.in/medicine/e-bact-500500-mg-injection-1-tm-inon2-014462"
    },
    {
        "name": "E Brium  25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-brium-25-mg-tablet-10-tm-tacr1-012582"
    },
    {
        "name": "E C Solution 400ml",
        "link": "https://www.truemeds.in/medicine/e-c-solution-400-ml-tm-soon2-000764"
    },
    {
        "name": "E Cam 500 Mg/0.25mcg/7.5mg Capsule 10",
        "link": "https://www.truemeds.in/medicine/e-cam-500-mg025mcg75mg-capsule-10-tm-cacr1-001569"
    },
    {
        "name": "E Cam Max Capsule 10",
        "link": "https://www.truemeds.in/otc/e-cam-max-soft-gelatin-capsule-10-tm-sole1-000624"
    },
    {
        "name": "E Cef 1.5 GM Injection 1",
        "link": "https://www.truemeds.in/medicine/e-cef-15-gm-injection-1-tm-inon2-015042"
    },
    {
        "name": "E Cef Cv 200/125mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-cef-cv-200125-mg-tablet-10-tm-tacr1-012600"
    },
    {
        "name": "E Cef Forte Dry Syrup 30ml",
        "link": "https://www.truemeds.in/medicine/e-cef-forte-dry-syrup-30-ml-tm-drup1-002369"
    },
    {
        "name": "E Cef O 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-cef-o-200200-mg-tablet-10-tm-tacr1-012601"
    },
    {
        "name": "E Cin 250 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/e-cin-250-mg-capsule-10-tm-cacr1-012246"
    },
    {
        "name": "E Cip 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-cip-500-mg-tablet-10-tm-tacr1-073565"
    },
    {
        "name": "F & A 0.25/20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-a-02520-mg-tablet-10-tm-tacr1-014756"
    },
    {
        "name": "F 029 Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-029-1-mg1500-mcg05-mg-tablet-10-tm-cacr1-001840"
    },
    {
        "name": "F 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-20-mg-tablet-10-tm-tacr1-087880"
    },
    {
        "name": "F 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-40-mg-tablet-10-tm-tacr1-089363"
    },
    {
        "name": "F 5 Plus 5 Mg/1500mcg/1.5mg/200mg Capsule 10",
        "link": "https://www.truemeds.in/medicine/f-5-plus-5-mg1500mcg15mg200mg-capsule-10-tm-cacr1-001839"
    },
    {
        "name": "F 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-5-5-mg-tablet-10-tm-tacr1-014757"
    },
    {
        "name": "F 5 Tablet 30",
        "link": "https://www.truemeds.in/medicine/f-5-5-mg-tablet-30-tm-tacr1-014758"
    },
    {
        "name": "F Biwash Plus Ad Shampoo 60 ML",
        "link": "https://www.truemeds.in/medicine/f-biwash-plus-ad-shampoo-60-ml-tm-shoo1-000598"
    },
    {
        "name": "F Biwash Plus Shampoo 60 ML",
        "link": "https://www.truemeds.in/medicine/f-biwash-plus-shampoo-60-ml-tm-shoo1-000597"
    },
    {
        "name": "F Clin Shampoo 100ml",
        "link": "https://www.truemeds.in/otc/f-clin-shampoo-100ml-tm-shoo1-000898"
    },
    {
        "name": "F Con 150 MG Tablet 1",
        "link": "https://www.truemeds.in/medicine/f-con-omega-150-mg-tablet-1-tm-tacr1-014759"
    },
    {
        "name": "F Con Az 150/1000 MG Kit 1",
        "link": "https://www.truemeds.in/medicine/f-con-az-omega-1501000-mg-kit-1-tm-kiit1-000030"
    },
    {
        "name": "F Cona 150 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-cona-150-mg-tablet-10-tm-tacr1-098637"
    },
    {
        "name": "F Cort 6 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-cort-6-mg-tablet-10-tm-tacr1-088142"
    },
    {
        "name": "F Din 120 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/f-din-120-mg-tablet-10-tm-tacr1-091101"
    },
    {
        "name": "F Extend Solution 60ml",
        "link": "https://www.truemeds.in/medicine/f-extend-solution-60ml-tm-soon2-001043"
    },
    {
        "name": "H 2 T Gold Tablet 10",
        "link": "https://www.truemeds.in/otc/h-2-t-gold-tablet-10-tm-tacr1-086081"
    },
    {
        "name": "H Cef 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/h-cef-250-mg-tablet-10-tm-tacr1-095524"
    },
    {
        "name": "H Cold Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/h-cold-syrup-100-ml-tm-syup1-012474"
    },
    {
        "name": "H Cort 100mg Injection 1",
        "link": "https://www.truemeds.in/medicine/h-cort-100-mg-injection-1-tm-inon2-003589"
    },
    {
        "name": "H Drill Expectorant 100 ML",
        "link": "https://www.truemeds.in/medicine/h-drill-expectorant-100-ml-tm-syup1-012198"
    },
    {
        "name": "H Fol Plus Softgel Capsule 15",
        "link": "https://www.truemeds.in/medicine/h-fol-plus-softgel-capsule-15-tm-sole1-000258"
    },
    {
        "name": "H Gut Powder 1.1gm",
        "link": "https://www.truemeds.in/otc/h-gut-powder-11gm-tm-poer1-003846"
    },
    {
        "name": "H Gut Sachet 1gm",
        "link": "https://www.truemeds.in/medicine/h-gut-sachet-1-gm-TM-SAET1-000492"
    },
    {
        "name": "H Kodex Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/h-kodex-syrup-100-ml-tm-syup1-012280"
    },
    {
        "name": "H Lor 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/h-lor-10-mg-tablet-10-tm-tacr1-096804"
    },
    {
        "name": "H One 4 % Cream 30 GM",
        "link": "https://www.truemeds.in/medicine/h-one-4-cream-30-gm-tm-coom1-004722"
    },
    {
        "name": "H Peg Powder 119gm",
        "link": "https://www.truemeds.in/medicine/hpeg-powder-119-gm-TM-POER1-000155"
    },
    {
        "name": "H Quine Tablet 10",
        "link": "https://www.truemeds.in/medicine/h-quine-tablet-10-tm-tacr1-082514"
    },
    {
        "name": "H Seal Gel 170 ML",
        "link": "https://www.truemeds.in/medicine/h-seal-gel-170-ml-tm-geel1-001436"
    },
    {
        "name": "H Stat 250 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/h-stat-250-mg-injection-2-ml-tm-inon2-003590"
    },
    {
        "name": "H Stat 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/h-stat-250-mg-tablet-10-tm-tacr1-018381"
    },
    {
        "name": "G & G Pharmacy Musli Guard Oil 20ml",
        "link": "https://www.truemeds.in/otc/g-g-pharmacy-musli-guard-oil-20ml-tm-oiil1-001346"
    },
    {
        "name": "G 1 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-1-mg-tablet-10-tm-tacr1-097300"
    },
    {
        "name": "G 2 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-2-mg-tablet-10-tm-tacr1-083315"
    },
    {
        "name": "G 32 Mouth Wash 30 ML",
        "link": "https://www.truemeds.in/otc/g-32-mouth-wash-30-ml-tm-mosh1-000093"
    },
    {
        "name": "G 80 80 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/g-80-80-mg-injection-2-ml-tm-inon2-003301"
    },
    {
        "name": "G And G Pharmacy Breast Up Capsule 30",
        "link": "https://www.truemeds.in/otc/g-and-g-pharmacy-breast-up-capsule-30-tm-cacr1-018293"
    },
    {
        "name": "G Cal 250 MG Tablet 10",
        "link": "https://www.truemeds.in/otc/g-cal-250-mg-tablet-10-tm-tacr1-050786"
    },
    {
        "name": "G Cal 500 MG Tablet 10",
        "link": "https://www.truemeds.in/otc/g-cal-500-mg-tablet-10-tm-tacr1-050787"
    },
    {
        "name": "G Cal 500 MG Tablet 15",
        "link": "https://www.truemeds.in/otc/g-cal-500-mg-tablet-15-tm-tacr1-050788"
    },
    {
        "name": "G Cal 625/125 MG Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/g-cal-625125-mg-syrup-200-ml-tm-syup1-001915"
    },
    {
        "name": "G Cal D3 Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-cal-d3-tablet-10-tm-tacr1-016519"
    },
    {
        "name": "G Cebran 0.3 % Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/g-cebran-03-drops-5-ml-tm-dohe1-000415"
    },
    {
        "name": "G Cebran 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-cebran-200-mg-tablet-10-tm-tacr1-016520"
    },
    {
        "name": "G Cebran Oz 200/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-cebran-oz-200500-mg-tablet-10-tm-tacr1-016522"
    },
    {
        "name": "G Cerin Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-cerin-tablet-10-tm-tacr1-047429"
    },
    {
        "name": "G Cet 10mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-cet-10-mg-tablet-10-tm-tacr1-016524"
    },
    {
        "name": "I 10 10 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/i-10-10-mg-capsule-10-tm-cacr1-002451"
    },
    {
        "name": "I 100 30 Mg/100mcg Suspension 150 ML",
        "link": "https://www.truemeds.in/medicine/i-100-helios-30-mg100mcg-suspension-150-ml-tm-sury1-000745"
    },
    {
        "name": "I 100 Tablet 15",
        "link": "https://www.truemeds.in/medicine/i-helios-10015-mg-tablet-15-tm-tacr1-018965"
    },
    {
        "name": "I 12 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/i-12-mg-tablet-10-tm-tacr1-091119"
    },
    {
        "name": "I 20 20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/i-20-20-mg-capsule-10-tm-cacr1-002452"
    },
    {
        "name": "I Activ Menstrual Cup Large With Jute Bag 1",
        "link": "https://www.truemeds.in/otc/i-activ-menstrual-cup-large-with-jute-bag-1-tm-cram1-000163"
    },
    {
        "name": "I Bact 2 % Cream 5 GM",
        "link": "https://www.truemeds.in/medicine/i-bact-2-cream-5-gm-tm-coom1-001098"
    },
    {
        "name": "I Blue Infusion Set 1",
        "link": "https://www.truemeds.in/otc/i-blue-infusion-set-1-tm-heca1-003360"
    },
    {
        "name": "I Boric Eye Drops 10ml",
        "link": "https://www.truemeds.in/medicine/i-boric-005012-eye-drops-10-ml-tm-eynt2-000514"
    },
    {
        "name": "I Boric Plus Eye Drops 10ml",
        "link": "https://www.truemeds.in/otc/i-boric-plus-eye-drops-10ml-tm-eynt2-003013"
    },
    {
        "name": "I Breathe Dpi Device 1",
        "link": "https://www.truemeds.in/otc/i-breathe-dpi-device-1-tm-cram1-000074"
    },
    {
        "name": "I Brint 100 MG Capsule 7",
        "link": "https://www.truemeds.in/medicine/i-brint-100-mg-capsule-7-tm-cacr1-014654"
    },
    {
        "name": "I Brom Eye Drops 5ml",
        "link": "https://www.truemeds.in/medicine/ibrom-eye-drops-5-ml-tm-eynt2-001510"
    },
    {
        "name": "I Brom Plus Ophthalmic Solution 5ml",
        "link": "https://www.truemeds.in/medicine/ibrom-plus-eye-drops-5-ml-tm-eynt2-001511"
    },
    {
        "name": "I Can One Step Pregnancy Test Kit 1",
        "link": "https://www.truemeds.in/medicine/i-can-pregnancy-test-kit-1-tm-teck1-000017"
    },
    {
        "name": "I Caris 150 Tablet 1",
        "link": "https://www.truemeds.in/medicine/i-caris-150-mg-tablet-1-tm-tacr1-079692"
    },
    {
        "name": "L & E Soap 100 GM",
        "link": "https://www.truemeds.in/otc/l-e-soap-100-gm-tm-soap1-000354"
    },
    {
        "name": "L 10 M Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-10-m-tablet-10-tm-tacr1-092241"
    },
    {
        "name": "L 15 15 % Cream 15 GM",
        "link": "https://www.truemeds.in/medicine/l-15-15-cream-15-gm-tm-coom1-001176"
    },
    {
        "name": "L 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-5-mg-tablet-10-tm-tacr1-080613"
    },
    {
        "name": "L Alerid 2.5 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/l-alerid-25-mg-syrup-30-ml-tm-syup1-002357"
    },
    {
        "name": "L Alerid Ax 5/75 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/l-alerid-ax-575-mg-capsule-10-tm-cacr1-002893"
    },
    {
        "name": "L Alerid D 5/180 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-alerid-d-5180-mg-tablet-10-tm-tacr1-020637"
    },
    {
        "name": "L Alerid Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-alerid-5-mg-tablet-10-tm-tacr1-020636"
    },
    {
        "name": "L Amar X Piles Ointment 30gm",
        "link": "https://www.truemeds.in/otc/l-amar-x-piles-ointment-30gm-tm-oint1-001882"
    },
    {
        "name": "L Argik Z Orange Flavour Sugar Free Sachet 5gm",
        "link": "https://www.truemeds.in/otc/l-argik-z-sugar-free-sachet-5-gm-tm-saet1-001032"
    },
    {
        "name": "L Asparaginase 5000 IU Injection 1",
        "link": "https://www.truemeds.in/medicine/l-asparaginase-5000-iu-injection-1-tm-inon2-004289"
    },
    {
        "name": "L Atriz M 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-atriz-m-5-mg-tablet-10-tm-tacr1-020638"
    },
    {
        "name": "L Atriz Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-atriz-tablet-10-tm-tacr1-020639"
    },
    {
        "name": "L B Gut Capsule 10",
        "link": "https://www.truemeds.in/medicine/l-b-gut-capsule-10-tm-cacr1-012978"
    },
    {
        "name": "L Bakterie 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-bakterie-500-mg-tablet-10-tm-tacr1-089373"
    },
    {
        "name": "L Bakterie Oz Oral Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/l-bakterie-oz-oral-suspension-30-ml-tm-orps1-001322"
    },
    {
        "name": "J Cal 1250/100/4mg/100iu Tablet 10",
        "link": "https://www.truemeds.in/medicine/j-cal-12501004mg100iu-tablet-10-tm-tacr1-050865"
    },
    {
        "name": "J Fill Tablet 10",
        "link": "https://www.truemeds.in/otc/j-fill-tablet-10-tm-tacr1-105903"
    },
    {
        "name": "J P Flox Oz 200/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/j-p-flox-oz-200500-mg-tablet-10-tm-tacr1-019913"
    },
    {
        "name": "J P Nimu P 50/125 MG Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/j-p-nimu-p-50125-mg-syrup-60-ml-tm-syup1-002202"
    },
    {
        "name": "J Ring M Forte Tablet 10",
        "link": "https://www.truemeds.in/medicine/jring-m-forte-201000-mg-tablet-er-10-tm-tacr1-020092"
    },
    {
        "name": "J Ring M Tablet 10",
        "link": "https://www.truemeds.in/medicine/j-ring-m-20500-mg-tablet-er-10-tm-tacr1-055846"
    },
    {
        "name": "J Ring M Tablet 15",
        "link": "https://www.truemeds.in/medicine/j-ring-m-20500-mg-tablet-er-15-tm-taet1-000600"
    },
    {
        "name": "J Ring Tablet 10",
        "link": "https://www.truemeds.in/medicine/j-ring-20-mg-tablet-10-tm-tacr1-053158"
    },
    {
        "name": "J Tone C2 Tablet 10",
        "link": "https://www.truemeds.in/otc/j-tone-c2-tablet-10-tm-tacr1-074360"
    },
    {
        "name": "J.k. 22 Tablet 100",
        "link": "https://www.truemeds.in/medicine/jk-22-tablet-100-tm-tacr1-047837"
    },
    {
        "name": "Ja Rifa 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/ja-rifa-200-mg-tablet-10-tm-tacr1-102220"
    },
    {
        "name": "Ja Rifa 400mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/ja-rifa-400-mg-tablet-10-tm-tacr1-102223"
    },
    {
        "name": "Ja Rifa 550 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ja-rifa-550-mg-tablet-10-tm-tacr1-093171"
    },
    {
        "name": "Jaa 40 Tablet 10",
        "link": "https://www.truemeds.in/medicine/jaa-40-mg-tablet-10-tm-tacr1-101998"
    },
    {
        "name": "Jabryus 100mg 4 Blisters Of 7 Tablets",
        "link": "https://www.truemeds.in/medicine/jabryus-100mg-4-blisters-of-7-tablets-tm-tacr1-107352"
    },
    {
        "name": "Jabryus 200mg 4 Blisters Of 7 Tablets",
        "link": "https://www.truemeds.in/medicine/jabryus-200mg-4-blisters-of-7-tablets-tm-tacr1-107353"
    },
    {
        "name": "K Acne Foaming Face Wash 60ml",
        "link": "https://www.truemeds.in/otc/k-acne-facewash-60-ml-tm-fash1-000095"
    },
    {
        "name": "K Acne Powder 75 MG",
        "link": "https://www.truemeds.in/otc/k-acne-powder-75-mg-tm-poer1-001035"
    },
    {
        "name": "K Acne Soap 75 GM",
        "link": "https://www.truemeds.in/otc/k-acne-soap-75-gm-tm-soap1-000340"
    },
    {
        "name": "K Aece Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-aece-10-mg-tablet-10-tm-tacr1-104116"
    },
    {
        "name": "K Azithro 250 Tablet 6",
        "link": "https://www.truemeds.in/medicine/k-azithro-250-mg-tablet-6-tm-tacr1-101861"
    },
    {
        "name": "K Azithro 500 Tablet 3",
        "link": "https://www.truemeds.in/medicine/k-azithro-500-mg-tablet-3-tm-tacr1-102726"
    },
    {
        "name": "K Bact Ointment 5gm",
        "link": "https://www.truemeds.in/medicine/k-bact-2-ointment-5-gm-tm-oint1-000331"
    },
    {
        "name": "K Bait Powder 15gm",
        "link": "https://www.truemeds.in/medicine/k-bait-powder-15-gm-tm-poer1-000174"
    },
    {
        "name": "K Bind Powder 15gm",
        "link": "https://www.truemeds.in/medicine/k-bind-powder-15-gm-TM-POER1-001036"
    },
    {
        "name": "K Bind Suspension 60ml",
        "link": "https://www.truemeds.in/otc/k-bind-15-gm-suspension-60-ml-tm-syup1-011429"
    },
    {
        "name": "K Cefod 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-cefod-100-mg-tablet-10-tm-taer1-002424"
    },
    {
        "name": "K Cefod Cv Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-cefod-cv-tablet-10-tm-tacr1-094020"
    },
    {
        "name": "K Cetlevo 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-cetlevo-5-mg-tablet-10-tm-tacr1-088295"
    },
    {
        "name": "K Cit 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-cit-10-mg-tablet-10-tm-tacr1-020170"
    },
    {
        "name": "K Cit 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-cit-5-mg-tablet-10-tm-tacr1-020171"
    },
    {
        "name": "K Cit Mb 6 Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-cit-mb-6-tablet-10-tm-tacr1-020172"
    },
    {
        "name": "N 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-500-mg-tablet-10-tm-tacr1-089476"
    },
    {
        "name": "N Able 625 Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-able-625-tablet-10-tm-tacr1-075121"
    },
    {
        "name": "N Able Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-able-tablet-10-tm-tacr1-098478"
    },
    {
        "name": "N Acetau Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-acetau-tablet-10-tm-tacr1-105447"
    },
    {
        "name": "N Andro Orange Flavour Sugar Free Sachet 10gm",
        "link": "https://www.truemeds.in/otc/n-andro-orange-flavour-sugar-free-sachet-10gm-tm-saet1-001102"
    },
    {
        "name": "N Cef 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-cef-200-mg-tablet-10-tm-tacr1-025796"
    },
    {
        "name": "N Cef Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/n-cef-dry-syrup-30-ml-tm-drup1-000557"
    },
    {
        "name": "N Citi 500 Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-citi-500-mg-tablet-10-tm-tacr1-025797"
    },
    {
        "name": "N Citi Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-citi-plus-500800-mg-tablet-10-tm-tacr1-025798"
    },
    {
        "name": "N Clomi 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/n-clomi-100-mg-tablet-10-tm-tacr1-091436"
    },
    {
        "name": "N Clomi 100 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/n-clomi-100-mg-tablet-5-tm-tacr1-025800"
    },
    {
        "name": "N Clomi 25 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/n-clomi-25-mg-tablet-5-tm-tacr1-025801"
    },
    {
        "name": "N Clomi 50 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/n-clomi-50-mg-tablet-5-tm-tacr1-025802"
    },
    {
        "name": "N Clomi Plus 100mg Tablet 5",
        "link": "https://www.truemeds.in/medicine/n-clomi-plus-100-mg-tablet-5-tm-tacr1-025803"
    },
    {
        "name": "N Clomi Plus 50mg Tablet 5",
        "link": "https://www.truemeds.in/medicine/n-clomi-plus-50-mg-tablet-5-tm-tacr1-025804"
    },
    {
        "name": "N Cold New Syrup 60ml",
        "link": "https://www.truemeds.in/medicine/n-cold-new-syrup-60ml-tm-syup1-013289"
    },
    {
        "name": "P 100 Oral  Drops 15ml",
        "link": "https://www.truemeds.in/medicine/p-100-mg-paediatric-oral-suspension-15-ml-tm-oron2-000054"
    },
    {
        "name": "P 100 Oral Drops 15ml",
        "link": "https://www.truemeds.in/medicine/p-100-mg-drop-15-ml-tm-oron1-000207"
    },
    {
        "name": "P 120 Suspension 60ml",
        "link": "https://www.truemeds.in/medicine/p-120-mg-suspension-60-ml-tm-sury1-001270"
    },
    {
        "name": "P 125 MG Drops 15 ML",
        "link": "https://www.truemeds.in/medicine/p-125-mg-drops-15-ml-tm-dohe1-000762"
    },
    {
        "name": "P 125 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/p-125-mg-suspension-60-ml-tm-sury1-001271"
    },
    {
        "name": "P 125 Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-125-mg-tablet-dt-10-tm-taer1-000785"
    },
    {
        "name": "P 1k Tablet 10",
        "link": "https://www.truemeds.in/otc/p-1k-tablet-10-tm-tasr1-003384"
    },
    {
        "name": "P 1k Tablet 15",
        "link": "https://www.truemeds.in/otc/p-1k-tablet-15-tm-tasr1-003502"
    },
    {
        "name": "P 20mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-20-mg-tablet-10-tm-tacr1-029977"
    },
    {
        "name": "P 250 Mf Suspension 60ml",
        "link": "https://www.truemeds.in/medicine/p-250-mf-suspension-60-ml-tm-orps1-000935"
    },
    {
        "name": "P 250 Suspension 60ml",
        "link": "https://www.truemeds.in/medicine/p-250-mg-suspension-60-ml-tm-sury1-001272"
    },
    {
        "name": "P 250 Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-250-mg-tablet-10-tm-tacr1-029978"
    },
    {
        "name": "P 40 Dsr Capsule 10",
        "link": "https://www.truemeds.in/medicine/p40-dsr-30-40-mg-capsule-pr-10-TM-CACR1-004251"
    },
    {
        "name": "P 40 Iv Injection 1",
        "link": "https://www.truemeds.in/medicine/p-40-mg-iv-injection-10-ml-tm-inon2-010053"
    },
    {
        "name": "P 40 Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-40-mg-tablet-10-tm-tacr1-053193"
    },
    {
        "name": "P 40 Tablet 15",
        "link": "https://www.truemeds.in/medicine/p-40-mg-tab-15-TM-TACR1-053580"
    },
    {
        "name": "R 1500 1500 MCG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-1500-1500-mcg-tablet-10-tm-tacr1-032814"
    },
    {
        "name": "R 2 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-2-10-mg-tablet-10-tm-tacr1-032815"
    },
    {
        "name": "R 20 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-20-20-mg-tablet-10-tm-tacr1-032816"
    },
    {
        "name": "R B Tone Capsule 15",
        "link": "https://www.truemeds.in/otc/r-b-tone-capsule-15-tm-cacr1-010019"
    },
    {
        "name": "R B Tone Injection 5ml",
        "link": "https://www.truemeds.in/medicine/rb-tone-100-mg-injection-5-ml-tm-inon2-006799"
    },
    {
        "name": "R B Tone Kid Syrup 100ml",
        "link": "https://www.truemeds.in/otc/rb-tone-kid-syrup-100-ml-tm-syup1-007980"
    },
    {
        "name": "R B Tone Oral Drops 15ml",
        "link": "https://www.truemeds.in/otc/rb-tone-drops-15-ml-tm-dohe1-001608"
    },
    {
        "name": "R B Tone Rapid Sugar Free Syrup 225ml",
        "link": "https://www.truemeds.in/otc/r-b-tone-rapid-sugarfree-syrup-225-ml-tm-syup1-011340"
    },
    {
        "name": "R B Tone Rapid Syrup 225ml",
        "link": "https://www.truemeds.in/medicine/r-b-tone-rapid-syrup-225-ml-tm-syup1-008357"
    },
    {
        "name": "R B Tone Rapid Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-b-tone-rapid-tablet-10-tm-tacr1-079043"
    },
    {
        "name": "R B Tone Syrup 200ml",
        "link": "https://www.truemeds.in/otc/r-b-tone-syrup-200-ml-tm-syup1-009383"
    },
    {
        "name": "R B Tone Xt Tablet 10",
        "link": "https://www.truemeds.in/otc/rb-tone-xt-10015225-mg-tablet-10-tm-tacr1-032865"
    },
    {
        "name": "R Ben 200 MG Oral Suspension 10 ML",
        "link": "https://www.truemeds.in/medicine/r-ben-200-mg-oral-suspension-10-ml-tm-sury1-002744"
    },
    {
        "name": "R Bex Gold Capsule 10",
        "link": "https://www.truemeds.in/otc/r-bex-gold-capsule-10-tm-cacr1-008064"
    },
    {
        "name": "R Bex Mix Fruit & Pineapple Flavour Syrup 200ml",
        "link": "https://www.truemeds.in/medicine/r-bex-syrup-200-ml-tm-syup1-006835"
    },
    {
        "name": "R Brox Dx Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/r-brox-dx-syrup-100-ml-tm-syup1-012260"
    },
    {
        "name": "M 20 Infusion 350 ML",
        "link": "https://www.truemeds.in/medicine/m-20-infusion-350-ml-tm-iner1-000654"
    },
    {
        "name": "M 400 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-400-mg-tablet-10-tm-tacr1-023062"
    },
    {
        "name": "M A Neem Oil 100ml",
        "link": "https://www.truemeds.in/otc/m-a-neem-oil-100ml-tm-oiil1-001375"
    },
    {
        "name": "M A Oliva Olive Oil 200ml",
        "link": "https://www.truemeds.in/otc/m-a-oliva-olive-oil-200ml-tm-oiil1-001216"
    },
    {
        "name": "M Beat 25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-beat-25-mg-tablet-10-tm-taet1-001689"
    },
    {
        "name": "M Beat 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-beat-50-mg-tablet-10-tm-taet1-001690"
    },
    {
        "name": "M Bita Lp Tablet 10",
        "link": "https://www.truemeds.in/otc/m-bita-lp-tablet-10-tm-tacr1-104501"
    },
    {
        "name": "M C 2 % Gel 30 GM",
        "link": "https://www.truemeds.in/medicine/m-c-2-gel-30-gm-tm-geel1-000655"
    },
    {
        "name": "M Caffeine Coffee Lip Polishing Oil 10 ML",
        "link": "https://www.truemeds.in/otc/m-caffeine-coffee-lip-polishing-oil-10-ml-tm-oiil1-000752"
    },
    {
        "name": "M Caffeine Coffee With Berries Body Wash 200 ML",
        "link": "https://www.truemeds.in/otc/m-caffeine-coffee-with-berries-body-wash-200-ml-tm-lint1-001950"
    },
    {
        "name": "M Caffeine Milky Brew Raw Coffee Face Wash 75 ML",
        "link": "https://www.truemeds.in/otc/m-caffeine-milky-brew-raw-coffee-face-wash-75-ml-tm-fash1-000517"
    },
    {
        "name": "M Cain 2 % Jelly 30 GM",
        "link": "https://www.truemeds.in/medicine/m-cain-2-jelly-30-gm-tm-jely1-000006"
    },
    {
        "name": "M Cal Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-cal-tablet-10-tm-tacr1-023063"
    },
    {
        "name": "M Cal Tablet 100",
        "link": "https://www.truemeds.in/medicine/m-cal-tablet-100-tm-tacr1-023064"
    },
    {
        "name": "M Cal Tablet 15",
        "link": "https://www.truemeds.in/medicine/m-cal-tablet-15-tm-tacr1-023065"
    },
    {
        "name": "M Cam 15 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-cam-15-mg-tablet-10-tm-tacr1-023079"
    },
    {
        "name": "Q 10 Gold Capsule 10",
        "link": "https://www.truemeds.in/otc/q-10-gold-capsule-10-tm-cacr1-018291"
    },
    {
        "name": "Q 100 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/q-100-mg-suspension-60-ml-tm-sury1-001379"
    },
    {
        "name": "Q 150 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/q-150-mg-suspension-60-ml-tm-sury1-001380"
    },
    {
        "name": "Q 300mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-300-mg-tablet-10-tm-tacr1-032543"
    },
    {
        "name": "Q Ace Forte Capsule 10",
        "link": "https://www.truemeds.in/otc/q-ace-forte-capsule-10-tm-cacr1-014643"
    },
    {
        "name": "Q Active Capsule 10",
        "link": "https://www.truemeds.in/otc/q-active-capsule-10-tm-cacr1-016178"
    },
    {
        "name": "Q Active Tablet 10",
        "link": "https://www.truemeds.in/otc/q-active-tablet-10-tm-tacr1-103996"
    },
    {
        "name": "Q Anzol 200 MG Suspension 10 ML",
        "link": "https://www.truemeds.in/medicine/q-anzol-200-mg-suspension-10-ml-tm-sury1-001381"
    },
    {
        "name": "Q Anzol 400 MG Tablet 1",
        "link": "https://www.truemeds.in/medicine/q-anzol-400-mg-tablet-1-tm-tacr1-032544"
    },
    {
        "name": "Q Bolt Capsule 10",
        "link": "https://www.truemeds.in/otc/q-bolt-capsule-10-tm-cacr1-017030"
    },
    {
        "name": "Q Can 150 MG Capsule 1",
        "link": "https://www.truemeds.in/medicine/q-can-150-mg-capsule-1-tm-cacr1-004803"
    },
    {
        "name": "Q Can 200 MG Tablet Dt 1",
        "link": "https://www.truemeds.in/medicine/q-can-200-mg-tablet-dt-1-tm-taer1-000843"
    },
    {
        "name": "Q Can 400 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-can-400-mg-tablet-10-tm-tacr1-032545"
    },
    {
        "name": "Q Can 50 MG Tablet 4",
        "link": "https://www.truemeds.in/medicine/q-can-50-mg-tablet-4-tm-tacr1-032546"
    },
    {
        "name": "Q Can As Kit 1",
        "link": "https://www.truemeds.in/medicine/q-can-as-kit-1-tm-kiit1-000154"
    },
    {
        "name": "Q Can Tz 150/1000 MG Kit 1",
        "link": "https://www.truemeds.in/medicine/q-can-tz-1501000-mg-kit-1-tm-kiit1-000079"
    },
    {
        "name": "S & M Pharmacy Male Extra Veg Capsule 60",
        "link": "https://www.truemeds.in/otc/s-m-pharmacy-male-extra-veg-capsule-60-tm-cacr1-017944"
    },
    {
        "name": "S & M Pharmacy Nasha Mukti Drops 30ml",
        "link": "https://www.truemeds.in/otc/s-m-pharmacy-nasha-mukti-drops-30ml-tm-dohe1-002363"
    },
    {
        "name": "S 15 15 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-15-15-mg-tablet-10-tm-tacr1-035491"
    },
    {
        "name": "S 15 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-15-mg-tablet-10-tm-tacr1-049177"
    },
    {
        "name": "S 26 Gold Stage 1 Powder 400 GM",
        "link": "https://www.truemeds.in/otc/s-26-gold-stage-1-powder-400-gm-tm-poer1-002547"
    },
    {
        "name": "S 26 Gold Stage 2  Powder 400 GM",
        "link": "https://www.truemeds.in/otc/s-26-gold-stage-2-powder-400-gm-tm-poer1-002542"
    },
    {
        "name": "S 75 Powder 75gm",
        "link": "https://www.truemeds.in/otc/s-75-powder-75-gm-tm-poer1-001686"
    },
    {
        "name": "S Adimer 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-adimer-200-mg-tablet-10-tm-tacr1-089473"
    },
    {
        "name": "S Adimer 400 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-adimer-400-mg-tablet-10-tm-tacr1-060582"
    },
    {
        "name": "S Amcard 2.5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amcard-25-mg-tablet-10-tm-tacr1-035492"
    },
    {
        "name": "S Amcard 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amcard-5-mg-tablet-10-tm-tacr1-035493"
    },
    {
        "name": "S Amleod 2.5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amleod-25-mg-tablet-10-tm-tacr1-053676"
    },
    {
        "name": "S Amleod 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amleod-5-mg-tablet-10-tm-tacr1-053675"
    },
    {
        "name": "S Amlode 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amlode-5-mg-tablet-10-tm-tacr1-103715"
    },
    {
        "name": "S Amloking 2.5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amloking-25-tablet-10-tm-tacr1-107222"
    },
    {
        "name": "S Amloking 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-amloking-5-tablet-10-tm-tacr1-107221"
    },
    {
        "name": "O 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-200-mg-tablet-10-tm-tacr1-090785"
    },
    {
        "name": "O Anxit 0.5/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-anxit-0510-mg-tablet-10-tm-tacr1-027887"
    },
    {
        "name": "O Anxit Plus 0.5/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-anxit-plus-0510-mg-tablet-10-tm-tacr1-027888"
    },
    {
        "name": "O Anxit Plus 0.5/5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-anxit-plus-055-mg-tablet-10-tm-tacr1-027889"
    },
    {
        "name": "O B Silk Touch Pro Comfort Regular Tampons 20",
        "link": "https://www.truemeds.in/otc/o-b-silk-touch-pro-comfort-regular-tampons-20-tm-heca1-003172"
    },
    {
        "name": "O Bact 400mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-bact-400-mg-tablet-10-tm-tacr1-099100"
    },
    {
        "name": "O Bakterie 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-bakterie-200-mg-tablet-10-tm-tacr1-089372"
    },
    {
        "name": "O Bakterie Oral Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/o-bakterie-oral-suspension-60-ml-tm-orps1-001115"
    },
    {
        "name": "O Bakterie Oz Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-bakterie-oz-tablet-10-tm-tacr1-092848"
    },
    {
        "name": "O Berry 0.2 Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-berry-02-mg-tablet-10-tm-tacr1-027890"
    },
    {
        "name": "O Berry 0.3 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-berry-03-mg-tablet-10-tm-tacr1-027891"
    },
    {
        "name": "O Bio Oz 200/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-bio-oz-200500-mg-tablet-10-tm-tacr1-027892"
    },
    {
        "name": "O Bit 20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/o-bit-20-mg-capsule-10-tm-cacr1-015644"
    },
    {
        "name": "O Carb 0.34/0.0034 Ml/34 MG Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/o-carb-03400034-ml34-mg-drops-5-ml-tm-dohe1-001365"
    },
    {
        "name": "O Cebran 0.3 % Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/o-cebran-03-drops-5-ml-tm-dohe1-000681"
    },
    {
        "name": "O Cebran 200 MG Infusion 100 ML",
        "link": "https://www.truemeds.in/medicine/o-cebran-200-mg-infusion-100-ml-tm-iner1-000387"
    },
    {
        "name": "T 1 40 MCG Eye Drops 3 ML",
        "link": "https://www.truemeds.in/medicine/t-1-40-mcg-eye-drops-3-ml-tm-eynt2-001182"
    },
    {
        "name": "T 1 Pf Eye Drops 3ml",
        "link": "https://www.truemeds.in/medicine/t-1-pf-eye-drop-3-ml-tm-eynt2-001964"
    },
    {
        "name": "T 1 Z Eye Drops 3ml",
        "link": "https://www.truemeds.in/medicine/t-1-z-eye-drops-3ml-tm-eynt2-002912"
    },
    {
        "name": "T 98 Ds Suspension 60ml",
        "link": "https://www.truemeds.in/medicine/t98-ds-250-mg-suspension-60-ml-tm-sury1-001612"
    },
    {
        "name": "T 98 Junior Tablet 10",
        "link": "https://www.truemeds.in/medicine/t98-junior-250-mg-tablet-10-tm-tacr1-038078"
    },
    {
        "name": "T 98 Oral Drops 15ml",
        "link": "https://www.truemeds.in/medicine/t98-100-mg-drops-15-ml-tm-dohe1-000938"
    },
    {
        "name": "T 98 Suspension 60ml",
        "link": "https://www.truemeds.in/medicine/t98-125-mg-suspension-60-ml-tm-sury1-001611"
    },
    {
        "name": "T 98 Tablet 15",
        "link": "https://www.truemeds.in/medicine/t98-500-mg-tablet-15-tm-tacr1-038077"
    },
    {
        "name": "T Art 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-art-40-mg-tablet-10-tm-tacr1-095199"
    },
    {
        "name": "T Ator 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-ator-20-mg-tablet-10-tm-tacr1-098223"
    },
    {
        "name": "T Ator 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-ator-40-mg-tablet-10-tm-tacr1-089986"
    },
    {
        "name": "T Bact Cream 10gm",
        "link": "https://www.truemeds.in/medicine/t-bact-2-cream-10-gm-tm-coom1-004597"
    },
    {
        "name": "T Bact Cream 7.5gm",
        "link": "https://www.truemeds.in/medicine/t-bact-2-cream-75-gm-tm-coom1-002064"
    },
    {
        "name": "T Bact Ointment 15gm",
        "link": "https://www.truemeds.in/medicine/t-bact-2-ointment-15gm-tm-oint1-000656"
    },
    {
        "name": "T Bact Ointment 5gm",
        "link": "https://www.truemeds.in/medicine/t-bact-2-ointment-5gm-tm-oint1-000657"
    },
    {
        "name": "T Berto 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-berto-40-mg-tablet-10-tm-tacr1-080533"
    },
    {
        "name": "Waakano Gold 10 Capsule 10",
        "link": "https://www.truemeds.in/medicine/waakano-gold-10-capsule-10-tm-cair1-000003"
    },
    {
        "name": "Wafer Syrup 150 ML",
        "link": "https://www.truemeds.in/medicine/wafer-syrup-150-ml-tm-syup1-007355"
    },
    {
        "name": "Wafol D Capsule 10",
        "link": "https://www.truemeds.in/otc/wafol-d-capsule-10-tm-cacr1-018618"
    },
    {
        "name": "Wafol D Tablet 10",
        "link": "https://www.truemeds.in/otc/wafol-d-tablet-10-tm-tacr1-111184"
    },
    {
        "name": "Wafol Tablet 10",
        "link": "https://www.truemeds.in/medicine/wafol-tablet-10-tm-tacr1-078583"
    },
    {
        "name": "Wagus Dsr Capsule 10",
        "link": "https://www.truemeds.in/medicine/wagus-dsr-capsule-10-tm-cale1-001127"
    },
    {
        "name": "Waigamicin A Gel 15gm",
        "link": "https://www.truemeds.in/medicine/waigamicin-a-gel-15-gm-tm-geel1-002502"
    },
    {
        "name": "Waigamicin Gel 20 GM",
        "link": "https://www.truemeds.in/medicine/waigamicin-gel-20-gm-tm-geel1-002766"
    },
    {
        "name": "Wajudi Tursiya Pills 120",
        "link": "https://www.truemeds.in/otc/wajudi-tursiya-pills-120-tm-tacr1-108565"
    },
    {
        "name": "Wakcef 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/wakcef-500-mg-tablet-10-tm-tacr1-086976"
    },
    {
        "name": "Wakfree 1.16 % Gel 30 GM",
        "link": "https://www.truemeds.in/medicine/wakfree-116-gel-30-gm-tm-geel1-001145"
    },
    {
        "name": "Wakfree Od Tablet 10",
        "link": "https://www.truemeds.in/medicine/wakfree-od-1500-mg-tablet-10-tm-tacr1-043600"
    },
    {
        "name": "Waklert 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/waklert-100-mg-tablet-10-tm-tacr1-043601"
    },
    {
        "name": "Waklert 150 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/waklert-150-mg-tablet-10-tm-tacr1-043602"
    },
    {
        "name": "Waklert 250 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/waklert-250-mg-tablet-5-tm-tacr1-043603"
    },
    {
        "name": "Waklert 50 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/waklert-50-mg-tablet-5-tm-tacr1-043604"
    },
    {
        "name": "X Cain 2% Injection 30 ML",
        "link": "https://www.truemeds.in/medicine/x-cain-2-injection-30-ml-tm-inon2-015530"
    },
    {
        "name": "X Cain Adr Injection 30 ML",
        "link": "https://www.truemeds.in/medicine/x-cain-adr-injection-30-ml-tm-inon2-015529"
    },
    {
        "name": "X Car Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-car-tablet-10-tm-tacr1-049887"
    },
    {
        "name": "X Cet Plus Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/x-cet-plus-syrup-100-ml-tm-syup1-011803"
    },
    {
        "name": "X Cid Mango Flavour Sugar Free Syrup 170 ML",
        "link": "https://www.truemeds.in/otc/x-cid-mango-flavour-sugar-free-syrup-170-ml-tm-orps1-001375"
    },
    {
        "name": "X Clave 1000 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-clave-1000-mg-tablet-10-tm-tacr1-094567"
    },
    {
        "name": "X Clave 375mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-clave-375-mg-tablet-10-tm-tacr1-098936"
    },
    {
        "name": "X Cold Dmr Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-cold-dmr-tablet-10-tm-tacr1-049888"
    },
    {
        "name": "X Cold Plus Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/x-cold-plus-syrup-60-ml-tm-syup1-007375"
    },
    {
        "name": "X Cold Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/x-cold-syrup-100-ml-tm-syup1-004497"
    },
    {
        "name": "X Cold Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/x-cold-syrup-60-ml-tm-syup1-004498"
    },
    {
        "name": "X Cold Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-cold-tablet-10-tm-tacr1-043892"
    },
    {
        "name": "X Dex 15 Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/x-dex-15-syrup-100-ml-TM-SYUP1-007376"
    },
    {
        "name": "X Flam Gel 30 GM",
        "link": "https://www.truemeds.in/medicine/x-flam-gel-30-gm-tm-geel1-001886"
    },
    {
        "name": "X Foliate Facewash 50 GM",
        "link": "https://www.truemeds.in/otc/x-foliate-facewash-50-gm-tm-fash1-000137"
    },
    {
        "name": "X Fresh Eye Drops 10ml",
        "link": "https://www.truemeds.in/otc/x-fresh-eye-drops-10ml-tm-eynt2-003008"
    },
    {
        "name": "U B Fair Bathing Bar 150gm",
        "link": "https://www.truemeds.in/otc/ub-fair-soap-150-gm-tm-soap1-000501"
    },
    {
        "name": "U B Fair For Men Cream 30gm",
        "link": "https://www.truemeds.in/medicine/UB-FAIR-CREAM-30-GM-TM-COOM1-002232"
    },
    {
        "name": "U Bet Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/u-bet-injection-5-ml-tm-inon2-009736"
    },
    {
        "name": "U Care 375 Device 1",
        "link": "https://www.truemeds.in/otc/u-care-375-device-1-tm-cram1-000062"
    },
    {
        "name": "U Care Cu 250 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/u-care-cu-250-mg-injection-1-tm-inon2-008217"
    },
    {
        "name": "U Cox Mr Tablet 10",
        "link": "https://www.truemeds.in/medicine/u-cox-mr-tablet-10-tm-tacr1-088432"
    },
    {
        "name": "U Dic 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/u-dic-300-mg-tablet-10-tm-tacr1-088347"
    },
    {
        "name": "U Ease Tablet 10",
        "link": "https://www.truemeds.in/medicine/u-ease-40-mg-tablet-10-tm-tacr1-074179"
    },
    {
        "name": "U Fix 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/u-fix-200-mg-tablet-10-tm-tacr1-090481"
    },
    {
        "name": "U Fix O Tablet 10",
        "link": "https://www.truemeds.in/medicine/u-fix-o-tablet-10-tm-tacr1-089613"
    },
    {
        "name": "U Fixim 200 Tablet 4",
        "link": "https://www.truemeds.in/medicine/u-fixim-200-mg-tablet-4-tm-tacr1-041677"
    },
    {
        "name": "U Frag 1000000 IU Injection 1",
        "link": "https://www.truemeds.in/medicine/u-frag-1000000-iu-injection-1-tm-inon2-008218"
    },
    {
        "name": "U Frag 250000 IU Injection 1",
        "link": "https://www.truemeds.in/medicine/u-frag-250000-iu-injection-1-tm-inon2-008219"
    },
    {
        "name": "U Frag 500000iu Injection 1",
        "link": "https://www.truemeds.in/medicine/u-frag-500000-iu-injection-1-tm-inon2-008221"
    },
    {
        "name": "U Frag 5000iu Injection 1",
        "link": "https://www.truemeds.in/medicine/u-frag-5000-iu-injection-1-tm-inon2-008220"
    },
    {
        "name": "U Free 100 MG Capsule 7",
        "link": "https://www.truemeds.in/medicine/u-free-100-mg-capsule-7-tm-cacr1-006128"
    },
    {
        "name": "Y Coxib Ap 100/4mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/y-coxib-ap-1004-mg-tablet-10-tm-tacr1-102395"
    },
    {
        "name": "Y Coxib Mr Tablet 10",
        "link": "https://www.truemeds.in/medicine/y-coxib-mr-604-mg-tablet-10-tm-tacr1-103062"
    },
    {
        "name": "Y Coxib P 60/325mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/y-coxib-p-60325-mg-tablet-10-tm-tacr1-102938"
    },
    {
        "name": "Y Cyst 850mg Tablet Sr 10",
        "link": "https://www.truemeds.in/otc/y-cyst-850-mg-tablet-sr-10-tm-tasr1-001187"
    },
    {
        "name": "Y Cyst Diet Powder 25 GM",
        "link": "https://www.truemeds.in/otc/y-cyst-diet-powder-25-gm-tm-poer1-000423"
    },
    {
        "name": "Y Cyst Forte Tablet 10",
        "link": "https://www.truemeds.in/otc/y-cyst-forte-tablet-10-tm-tacr1-051916"
    },
    {
        "name": "Y Fi 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/y-fi-10-mg-tablet-10-tm-tacr1-094520"
    },
    {
        "name": "Y Fi 5mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/y-fi-5-mg-tablet-10-tm-tacr1-102884"
    },
    {
        "name": "Y Fi Plus Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/y-fi-plus-syrup-60-ml-tm-syup1-011609"
    },
    {
        "name": "Y Ral P Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/y-ral-p-syrup-60-ml-tm-syup1-007391"
    },
    {
        "name": "Y Ral Syrup 50 ML",
        "link": "https://www.truemeds.in/medicine/y-ral-syrup-50-ml-tm-syup1-007392"
    },
    {
        "name": "Y Spur Capsule 30",
        "link": "https://www.truemeds.in/medicine/y-spur-capsule-30-tm-cacr1-008489"
    },
    {
        "name": "Y2p Tablet 10",
        "link": "https://www.truemeds.in/medicine/y2p-tablet-10-tm-tacr1-049926"
    },
    {
        "name": "Yab L 75/20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/yab-l-7520-mg-capsule-10-tm-cale1-001012"
    },
    {
        "name": "Yacca 325/5/2 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/yacca-32552-mg-tablet-10-tm-tacr1-044258"
    },
    {
        "name": "Yacca Place 5/2/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/yacca-place-5210-mg-tablet-10-tm-tacr1-044259"
    },
    {
        "name": "V & M Forte Tablet 10",
        "link": "https://www.truemeds.in/otc/v-m-forte-tablet-10-tm-tacr1-042172"
    },
    {
        "name": "V & M Forte Tablet 15",
        "link": "https://www.truemeds.in/medicine/vm-forte-tablet-15-tm-tacr1-078168"
    },
    {
        "name": "V & M Nu Mango Flavour Syrup 100ml",
        "link": "https://www.truemeds.in/otc/v-m-nu-syrup-100-ml-tm-syup1-011403"
    },
    {
        "name": "V & M Nu Mango Flavour Syrup 200ml",
        "link": "https://www.truemeds.in/otc/v-m-nu-syrup-200-ml-tm-syup1-004302"
    },
    {
        "name": "V & M Nu Oral Drops 15ml",
        "link": "https://www.truemeds.in/otc/v-m-nu-drops-15-ml-tm-dohe1-001936"
    },
    {
        "name": "V & M Tablet 15",
        "link": "https://www.truemeds.in/medicine/v-m-tablet-15-tm-tacr1-074382"
    },
    {
        "name": "V & V Tablet 10",
        "link": "https://www.truemeds.in/otc/v-v-tablet-10-tm-tacr1-051790"
    },
    {
        "name": "V 0.2 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-02-mg-tablet-10-tm-tacr1-075542"
    },
    {
        "name": "V 0.3 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-03-mg-tablet-10-tm-tacr1-075545"
    },
    {
        "name": "V 2 50/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-2-5010-mg-tablet-10-tm-tacr1-042174"
    },
    {
        "name": "V 2 Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-2-plus-5050010-mg-tablet-10-tm-tacr1-042175"
    },
    {
        "name": "V Bact 250 MG Tablet  10",
        "link": "https://www.truemeds.in/medicine/v-bact-250-mg-tablet-10-tm-taer1-002219"
    },
    {
        "name": "V Bathe Intimate Hygiene Cleanser 100ml",
        "link": "https://www.truemeds.in/otc/v-bathe-liquid-100-ml-tm-lint1-000682"
    },
    {
        "name": "V Bone Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-bone-tablet-10-tm-tacr1-062535"
    },
    {
        "name": "V Brom 0.09 % Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/v-brom-009-drops-5-ml-tm-dohe1-001009"
    },
    {
        "name": "V Can 150 MG Capsule 1",
        "link": "https://www.truemeds.in/medicine/v-can-150-mg-capsule-1-tm-cacr1-006240"
    },
    {
        "name": "Z & B Drops 15 ML",
        "link": "https://www.truemeds.in/otc/z-b-drreddys-drops-15-ml-tm-dohe1-001491"
    },
    {
        "name": "Z & B Old  Capsule 15",
        "link": "https://www.truemeds.in/medicine/z-b-old-capsule-15-tm-cacr1-008494"
    },
    {
        "name": "Z & B Softlet 15",
        "link": "https://www.truemeds.in/otc/z-b-softlets-15-tm-tacr1-053659"
    },
    {
        "name": "Z & B Tablet 15",
        "link": "https://www.truemeds.in/otc/z-and-b-tablet-15-tm-tacr1-082972"
    },
    {
        "name": "Z & D Ds 20 Suspension 15ml",
        "link": "https://www.truemeds.in/otc/z-and-d-ds-20mg-tm-sury1-001755"
    },
    {
        "name": "Z Alfu 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-alfu-10-mg-tablet-10-tm-taet1-001537"
    },
    {
        "name": "Z And D 20 MG Tablet Dt 7",
        "link": "https://www.truemeds.in/otc/z-and-d-20-mg-tablet-dt-7-tm-tacr1-075376"
    },
    {
        "name": "Z Bact 2 % Ointment 5 GM",
        "link": "https://www.truemeds.in/medicine/z-bact-2-ointment-5-gm-tm-oint1-001655"
    },
    {
        "name": "Z Bank 500mg Tablet 3",
        "link": "https://www.truemeds.in/medicine/z-bank-500-mg-tablet-3-tm-tacr1-103362"
    },
    {
        "name": "Z Beta 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-beta-20-mg-tablet-10-tm-tacr1-095266"
    },
    {
        "name": "Z Block Uvb Spf 50+ Pa+++ Sunscreen Gel 50ml",
        "link": "https://www.truemeds.in/medicine/z-block-gel-50-ml-tm-geel1-002333"
    },
    {
        "name": "Z Brom Eye Drops 5ml",
        "link": "https://www.truemeds.in/medicine/zbrom-009-eye-drops-5-ml-tm-eynt2-001374"
    },
    {
        "name": "Z Cal 500 Tablet 15",
        "link": "https://www.truemeds.in/otc/z-calzta-capsule-10-tm-cacr1-009455"
    },
    {
        "name": "Z Cal Tablet 15",
        "link": "https://www.truemeds.in/otc/z-cal-tablet-15-tm-tacr1-109185"
    },
    {
        "name": "Z Cd3 Capsule 10",
        "link": "https://www.truemeds.in/medicine/z-cd3-capsule-10-tm-cacr1-008496"
    },
    {
        "name": "Z Cid Mango Flavour Sugar Dree Oral Suspension 170 ML",
        "link": "https://www.truemeds.in/otc/z-cid-mango-flavour-sugar-dree-oral-suspension-170-ml-tm-syup1-011966"
    },

    {
        "name": "D Cet 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-cet-10-mg-tablet-10-tm-tacr1-010135"
    },
    {
        "name": "D Cet 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-cet-5-mg-tablet-10-tm-tacr1-091640"
    },
    {
        "name": "D Cet Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/d-cet-syrup-60-ml-tm-syup1-005380"
    },
    {
        "name": "D Charge Capsule 8",
        "link": "https://www.truemeds.in/otc/d-charge-60k-capsule-8-tm-sole1-000303"
    },
    {
        "name": "D Chiro Plus Chewable Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-chiro-plus-chewable-tablet-10-TM-TACR1-046780"
    },
    {
        "name": "D Chiro Plus Strawberry Flavour Chewable Tablet 10",
        "link": "https://www.truemeds.in/otc/d-chiro-plus-strawberry-flavour-chewable-tablet-10-tm-chet1-000058"
    },
    {
        "name": "D Chlorex Eye/ear Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/d-chlorex-eyeear-drops-10-ml-tm-eyps2-000117"
    },
    {
        "name": "D Cin Eye/ear Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/d-cin-eyeear-drops-5-ml-tm-eyps2-000110"
    },
    {
        "name": "D Code 60k Orange Flavour Sugar Free Chewable Tablet 4",
        "link": "https://www.truemeds.in/otc/dcode-60k-chewable-orange-flavour-sugar-free-tablet-4-tm-tacr1-083105"
    },
    {
        "name": "D Cof Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/d-cof-syrup-100-ml-tm-syup1-001393"
    },
    {
        "name": "D Cold Clear Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/d-cold-clear-cream-10-gm-tm-coom1-002637"
    },
    {
        "name": "D Cold Clear Cream 35 GM",
        "link": "https://www.truemeds.in/medicine/d-cold-clear-cream-35-gm-tm-coom1-002638"
    },
    {
        "name": "D Cold Inhaler 0.5 ML",
        "link": "https://www.truemeds.in/medicine/d-cold-inhaler-05-ml-tm-inon1-000266"
    },
    {
        "name": "D Cold Light Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/d-cold-light-syrup-100-ml-tm-syup1-005381"
    },
    {
        "name": "D Cold Light Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/d-cold-light-syrup-60-ml-tm-syup1-005382"
    },
    {
        "name": "D Cold Open Up Inhaler 1",
        "link": "https://www.truemeds.in/medicine/d-cold-open-up-inhaler-1-tm-inon1-000267"
    },
    {
        "name": "C Cort 6mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-cort-6-mg-tablet-10-tm-tacr1-071132"
    },
    {
        "name": "C Cort Injection 1ml",
        "link": "https://www.truemeds.in/medicine/c-cort-40-mg-injection-1-tm-inon2-012206"
    },
    {
        "name": "C Cure Disposable Plastic Hand Gloves 100",
        "link": "https://www.truemeds.in/otc/c-cure-disposable-plastic-hand-gloves-100-tm-sual1-000033"
    },
    {
        "name": "C Cure Disposable Surgical Skin Blade Pack Of 12",
        "link": "https://www.truemeds.in/otc/c-cure-disposable-surgical-skin-blade-pack-of-12-tm-sual1-000116"
    },
    {
        "name": "C Cure Disposable Surgical Skin Blade Pack Of 50",
        "link": "https://www.truemeds.in/otc/c-cure-disposable-surgical-skin-blade-pack-of-50-tm-sual1-000117"
    },
    {
        "name": "C Cure Premium Underpads With Gel Lock Technology Large Pad 10",
        "link": "https://www.truemeds.in/otc/c-cure-premium-underpads-with-gel-lock-technology-large-pad-10-tm-pad1-000204"
    },
    {
        "name": "C Cure Protective Face Mask 50",
        "link": "https://www.truemeds.in/otc/c-cure-protective-face-mask-50-tm-mask1-000104"
    },
    {
        "name": "C Cure Surgical Face Mask 100",
        "link": "https://www.truemeds.in/otc/c-cure-surgical-face-mask-100-tm-mask1-000103"
    },
    {
        "name": "C Day 10 MG Tablet 10",
        "link": "https://www.truemeds.in/otc/c-day-10-mg-tablet-10-tm-tacr1-069531"
    },
    {
        "name": "C Dew Lotion 100ml",
        "link": "https://www.truemeds.in/medicine/c-dew-8-10-10--lotion-100-ml-TM-LOES1-000044"
    },
    {
        "name": "C Dex 4 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-dex-4-mg-tablet-10-tm-tacr1-063754"
    },
    {
        "name": "C Dex Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/c-dex-syrup-100-ml-tm-syup1-005133"
    },
    {
        "name": "C Dex Syrup 110 ML",
        "link": "https://www.truemeds.in/medicine/c-dex-syrup-110-ml-tm-syup1-005134"
    },
    {
        "name": "C Dime 1000/1000mg Injection 1",
        "link": "https://www.truemeds.in/medicine/c-dime-10001000-mg-injection-1-tm-inon2-000993"
    },
    {
        "name": "C Dime 500/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-dime-500500-mg-injection-10-ml-tm-inon2-000995"
    },
    {
        "name": "C Direct 740 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-direct-740-mg-tablet-10-tm-tacr1-005927"
    },
    {
        "name": "F3 Xt Tablet 10",
        "link": "https://www.truemeds.in/otc/f3-xt-tablet-10-tm-tacr1-107001"
    },
    {
        "name": "Fa 150 MG Tablet 1",
        "link": "https://www.truemeds.in/medicine/fa-thrift-150-mg-tablet-1-tm-tacr1-014765"
    },
    {
        "name": "Fa Forte 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/fa-forte-5-mg-tablet-10-tm-tacr1-014766"
    },
    {
        "name": "Fa Tablet 10",
        "link": "https://www.truemeds.in/otc/fa-tablet-10-tm-tacr1-109425"
    },
    {
        "name": "Fa9 Softgel Capsule 10",
        "link": "https://www.truemeds.in/otc/fa9-softgel-capsule-10-tm-sole1-000596"
    },
    {
        "name": "Faa 20 Suspension 150ml",
        "link": "https://www.truemeds.in/medicine/faa-20-mg-syrup-150-ml-tm-syup1-001753"
    },
    {
        "name": "Faa 20 Tablet 10",
        "link": "https://www.truemeds.in/medicine/faa-20-mg-tablet-10-tm-tacr1-014768"
    },
    {
        "name": "Faa 20 Tablet 15",
        "link": "https://www.truemeds.in/medicine/faa-20-mg-tablet-15-tm-tacr1-058564"
    },
    {
        "name": "Faa Plus 0.25/20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/faa-plus-02520-mg-tablet-10-tm-tacr1-014767"
    },
    {
        "name": "Fab 12 Tablet 10",
        "link": "https://www.truemeds.in/otc/fab-12-tablet-10-tm-tacr1-050654"
    },
    {
        "name": "Fabace Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabace-plus-tablet-10-tm-tacr1-091259"
    },
    {
        "name": "Fabbeu Hail Hydration Face Wash 100 ML",
        "link": "https://www.truemeds.in/otc/fabbeu-hail-hydration-face-wash-100-ml-tm-fash1-000464"
    },
    {
        "name": "Fabcium D Tablet 30",
        "link": "https://www.truemeds.in/otc/fabcium-d-tablet-30-tm-tacr1-083049"
    },
    {
        "name": "Fabeau Soap 1",
        "link": "https://www.truemeds.in/medicine/fabeau-soap-1-tm-soap1-000292"
    },
    {
        "name": "Fabessentials Lavender Rosemary Hand Wash 300ml",
        "link": "https://www.truemeds.in/otc/fabessentials-lavender-rosemary-hand-wash-300ml-tm-hash1-000017"
    },
    {
        "name": "Fabfour Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabfour-tablet-10-tm-tacr1-047154"
    },
    {
        "name": "A Fol Plus Capsule 10",
        "link": "https://www.truemeds.in/otc/afol-plus-capsule-10-tm-cacr1-008550"
    },
    {
        "name": "A Fol Tablet 10",
        "link": "https://www.truemeds.in/medicine/afol-5-mg-tablet-10-tm-tacr1-000960"
    },
    {
        "name": "A Fresh 0.2% Mouth Wash 100 ML",
        "link": "https://www.truemeds.in/otc/a-fresh-02-mouth-wash-100-ml-tm-mosh1-000169"
    },
    {
        "name": "A Fung 100mg Capsule 10",
        "link": "https://www.truemeds.in/medicine/a-fung-100mg-capsule-10-tm-cacr1-018872"
    },
    {
        "name": "A Gab 400/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-gab-40010-mg-tablet-10-tm-tacr1-059187"
    },
    {
        "name": "A Heal 90/48/100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-heal-9048100-mg-tablet-10-tm-tacr1-056366"
    },
    {
        "name": "A Keftal 60 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/a-keftal-60-mg-injection-1-tm-inon2-011240"
    },
    {
        "name": "A Klave 1000/200 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/a-klave-1000200-mg-injection-1-tm-inon2-000009"
    },
    {
        "name": "A Klave 500/125 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-klave-500125-mg-tablet-10-tm-tacr1-000050"
    },
    {
        "name": "A Kort 40 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/a-kort-40-mg-injection-1-tm-inon2-010387"
    },
    {
        "name": "A Lith 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-lith-300-mg-tablet-10-tm-tacr1-060125"
    },
    {
        "name": "A Lith 400 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/a-lith-400-mg-tablet-sr-10-tm-tasr1-001447"
    },
    {
        "name": "A Lith 450 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/a-lith-450-mg-tablet-sr-10-tm-tasr1-001512"
    },
    {
        "name": "A Lol 50 MG Tablet 14",
        "link": "https://www.truemeds.in/medicine/a-lol-50-mg-tablet-14-tm-tacr1-058971"
    },
    {
        "name": "A M Dopa 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-m-dopa-500-mg-tablet-10-tm-tacr1-000051"
    },
    {
        "name": "A Max Fort 80/480 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/a-max-fort-80480-mg-tablet-6-tm-tacr1-057597"
    },
    {
        "name": "E Mal Injection 10ml",
        "link": "https://www.truemeds.in/medicine/e-mal-75-mg-injection-10-ml-tm-inon2-002520"
    },
    {
        "name": "E Mal Injection 2ml",
        "link": "https://www.truemeds.in/medicine/e-mal-150-mg-injection-2-ml-tm-inon2-002518"
    },
    {
        "name": "E Mal Xp 150 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/e-mal-xp-150-mg-injection-1-ml-tm-inon2-002521"
    },
    {
        "name": "E Mal Xp 75 MG Injection 0.5 ML",
        "link": "https://www.truemeds.in/medicine/e-mal-xp-75-mg-injection-05-ml-tm-inon2-002522"
    },
    {
        "name": "E Max Ointment 25gm",
        "link": "https://www.truemeds.in/otc/e-max-ointment-25-gm-tm-oint1-001738"
    },
    {
        "name": "E Moist 0.5% Eye Drop 10 ML",
        "link": "https://www.truemeds.in/medicine/e-moist-05-eye-drop-10-ml-tm-eynt2-002407"
    },
    {
        "name": "E Mor Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/e-mor-syrup-200-ml-tm-syup1-001586"
    },
    {
        "name": "E Mor Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-mor-tablet-10-tm-tacr1-012586"
    },
    {
        "name": "E Mycin 100 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/e-mycin-100-mg-suspension-60-ml-tm-sury1-000551"
    },
    {
        "name": "E Mycin 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-mycin-250-mg-tablet-10-tm-tacr1-012587"
    },
    {
        "name": "E Mycin 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-mycin-500-mg-tablet-10-tm-tacr1-012588"
    },
    {
        "name": "E Ointment 100 GM",
        "link": "https://www.truemeds.in/otc/e-ointment-100-gm-tm-oint1-001750"
    },
    {
        "name": "E Ointment 40gm",
        "link": "https://www.truemeds.in/otc/e-ointment-40-tm-oint1-001623"
    },
    {
        "name": "E On 4 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/e-on-4-mg-injection-2-ml-tm-inon2-014606"
    },
    {
        "name": "E Ova L 2.5 Tablet 5",
        "link": "https://www.truemeds.in/medicine/e-ova-l-25-mg-tablet-5-tm-cacr1-001708"
    },
    {
        "name": "E Pant 40mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-pant-40-mg-tablet-10-tm-tacr1-101893"
    },
    {
        "name": "Habipro B Powder 200 GM",
        "link": "https://www.truemeds.in/otc/habipro-b-powder-200-gm-tm-poer1-000945"
    },
    {
        "name": "Habipro B Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/habipro-b-syrup-200-ml-tm-syup1-002018"
    },
    {
        "name": "Habipro Powder 200 GM",
        "link": "https://www.truemeds.in/otc/habipro-powder-200-gm-tm-poer1-000946"
    },
    {
        "name": "Habocif 50mg Dry Syrup 30ml",
        "link": "https://www.truemeds.in/medicine/habocif-50-mg-dry-syrup-30-ml-tm-drup1-002784"
    },
    {
        "name": "Habocif Lb 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/habocif-lb-200-mg-tablet-10-tm-tacr1-098360"
    },
    {
        "name": "Habocif O Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/habocif-o-dry-syrup-30-ml-tm-drup1-002683"
    },
    {
        "name": "Habocif O Tablet 10",
        "link": "https://www.truemeds.in/medicine/habocif-o-200200-mg-tablet-10-tm-tacr1-098890"
    },
    {
        "name": "Habof 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/habof-200-mg-tablet-10-tm-tacr1-101171"
    },
    {
        "name": "Hactacef 200 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/hactacef-200-mg-tablet-6-tm-tacr1-018387"
    },
    {
        "name": "Hactacef 50 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/hactacef-50-mg-syrup-30-ml-tm-syup1-002019"
    },
    {
        "name": "Hactaflox Oz 200/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/hactaflox-oz-200500-mg-tablet-10-tm-tacr1-018388"
    },
    {
        "name": "Hactamox 500/125 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/hactamox-500125-mg-tablet-6-tm-tacr1-018389"
    },
    {
        "name": "Hactamox Ds 400/57 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/hactamox-ds-40057-mg-syrup-30-ml-tm-syup1-002020"
    },
    {
        "name": "Hactodox Tablet 10",
        "link": "https://www.truemeds.in/otc/hactodox-tablet-10-tm-tacr1-047581"
    },
    {
        "name": "Had Q 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/had-q-200-mg-tablet-10-tm-tacr1-088700"
    },
    {
        "name": "Hadcif 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/hadcif-200-mg-tablet-10-tm-tacr1-098915"
    },
    {
        "name": "B Cin 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-cin-200-mg-tablet-10-tm-tacr1-004657"
    },
    {
        "name": "B Cin 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-cin-intel-250-mg-tablet-10-tm-tacr1-004637"
    },
    {
        "name": "B Cin 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-cin-intel-500-mg-tablet-10-tm-tacr1-004638"
    },
    {
        "name": "B Cin 750 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-cin-intel-750-mg-tablet-10-tm-tacr1-004639"
    },
    {
        "name": "B Cin Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-cin-100-mg-tablet-10-tm-tacr1-004656"
    },
    {
        "name": "B Citam Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-citam-tablet-10-tm-tacr1-062704"
    },
    {
        "name": "B Citral 1.38 GM Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/b-citral-138-gm-syrup-100-ml-tm-syup1-009199"
    },
    {
        "name": "B Clear 0.1 % Nasal Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/b-clear-01-nasal-drops-5-ml-tm-naer1-000123"
    },
    {
        "name": "B Clo 10 Tablet 10",
        "link": "https://www.truemeds.in/medicine/bclo-10-mg-tablet-10-tm-tacr1-062794"
    },
    {
        "name": "B Colen 40+ Softgel Capsule 10",
        "link": "https://www.truemeds.in/otc/b-colen-40-softgel-capsule-10-tm-sole1-000001"
    },
    {
        "name": "B Colen 40+ Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/b-colen-40-syrup-200-ml-tm-syup1-000590"
    },
    {
        "name": "B Colen Active Tablet 10",
        "link": "https://www.truemeds.in/otc/b-colen-active-tablet-10-tm-tacr1-004640"
    },
    {
        "name": "B Colen C Ns Syrup 100ml",
        "link": "https://www.truemeds.in/otc/b-colen-c-ns-syrup-100-ml-tm-syup1-007526"
    },
    {
        "name": "B Colen C Ns Syrup 50ml",
        "link": "https://www.truemeds.in/otc/b-colen-c-ns-syrup-50-ml-tm-syup1-007527"
    },
    {
        "name": "B Colen C Syrup 50 ML",
        "link": "https://www.truemeds.in/medicine/b-colen-c-syrup-50-ml-tm-syup1-004983"
    },
    {
        "name": "B Colen Capsule 10",
        "link": "https://www.truemeds.in/otc/b-colen-capsule-10-x-10-tm-cacr1-000501"
    },
    {
        "name": "I Glow Face Wash 100ml",
        "link": "https://www.truemeds.in/otc/i-glow-face-wash-100-ml-tm-fash1-000493"
    },
    {
        "name": "I Glow Face Wash 60ml",
        "link": "https://www.truemeds.in/otc/i-glow-face-wash-60-ml-tm-fash1-000587"
    },
    {
        "name": "I Glow Lite Cream 20gm",
        "link": "https://www.truemeds.in/medicine/i-glow-lite-cream-20-gm-tm-coom1-005042"
    },
    {
        "name": "I Glow Lite Soap 75gm",
        "link": "https://www.truemeds.in/otc/i-glow-lite-soap-75-gm-tm-soap1-000746"
    },
    {
        "name": "I Glow Lite Spf 16 Cream 50gm",
        "link": "https://www.truemeds.in/otc/i-glow-lite-spf-16-cream-50gm-tm-coom1-006389"
    },
    {
        "name": "I Glow Lite Spf 16 Daily Skin Whitening Cream 20gm",
        "link": "https://www.truemeds.in/otc/i-glow-lite-spf-16-daily-skin-whitening-cream-20gm-tm-coom1-006862"
    },
    {
        "name": "I Glowvit Tablet 10",
        "link": "https://www.truemeds.in/medicine/i-glowvit-tablet-10-tm-tacr1-065930"
    },
    {
        "name": "I Glowvit Vc1000 Kit 1",
        "link": "https://www.truemeds.in/otc/i-glowvit-vc1000-kit-1-tm-cacr1-018173"
    },
    {
        "name": "I Green Tablet 10",
        "link": "https://www.truemeds.in/otc/i-green-tablet-10-tm-tacr1-098406"
    },
    {
        "name": "I Ket C Soap 75 GM",
        "link": "https://www.truemeds.in/otc/i-ket-c-soap-75-gm-tm-soap1-000954"
    },
    {
        "name": "I Ket Shampoo 50 ML",
        "link": "https://www.truemeds.in/otc/i-ket-shampoo-50-ml-tm-shoo1-000758"
    },
    {
        "name": "I Key 100 Injection 5ml",
        "link": "https://www.truemeds.in/medicine/ikey-100-mg-injection-5-ml-tm-inon2-003858"
    },
    {
        "name": "I Know Cp Kit 1",
        "link": "https://www.truemeds.in/medicine/i-know-cp-kit-1-tm-kiit1-000131"
    },
    {
        "name": "I Kul Plus New Ophthalmic Solution 15ml",
        "link": "https://www.truemeds.in/medicine/new-i-kul-plus-005001205-eye-drops-15-ml-tm-eynt2-000518"
    },
    {
        "name": "I Lube 1.4/0.6 % Eye Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/i-lube-1406-eye-drops-10-ml-tm-eynt2-001676"
    },
    {
        "name": "I Lube Unims Eye Drops 0.5 ML",
        "link": "https://www.truemeds.in/medicine/i-lube-unims-eye-drops-05-ml-tm-eynt2-001505"
    },
    {
        "name": "G Folvin Ns Lb Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-folvin-ns-lb-tablet-10-tm-tacr1-047430"
    },
    {
        "name": "G Folvin Ns Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-folvin-ns-tablet-10-tm-tacr1-047431"
    },
    {
        "name": "G Folvin Pead Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/g-folvin-pead-syrup-100-ml-tm-syup1-005701"
    },
    {
        "name": "G Folvin Rf Drops 15 ML",
        "link": "https://www.truemeds.in/medicine/g-folvin-rf-drops-15-ml-tm-dohe1-001256"
    },
    {
        "name": "G Folvin Rf Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-folvin-rf-tablet-10-tm-tacr1-047432"
    },
    {
        "name": "G Folvin Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/g-folvin-syrup-200-ml-tm-syup1-005702"
    },
    {
        "name": "G Folvin Syrup 300ml",
        "link": "https://www.truemeds.in/medicine/g-folvin-syrup-300-ml-tm-syup1-005703"
    },
    {
        "name": "G Folvin Xt Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-folvin-xt-tablet-10-tm-tacr1-047433"
    },
    {
        "name": "G Folvin Z Capsule 10",
        "link": "https://www.truemeds.in/medicine/g-folvin-z-capsule-10-tm-cacr1-002131"
    },
    {
        "name": "G Forlin 1 Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-forlin-1500-mg-tablet-10-tm-tacr1-016537"
    },
    {
        "name": "G Forlin 2 Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-forlin-2500-mg-tablet-10-tm-tacr1-016538"
    },
    {
        "name": "G Forlin 2/500 MG Tablet 15",
        "link": "https://www.truemeds.in/medicine/g-forlin-2500-mg-tablet-15-tm-taet1-000890"
    },
    {
        "name": "G Formin Forte Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-formin-forte-tablet-10-tm-tacr1-076516"
    },
    {
        "name": "G Formin Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-formin-plus-tablet-10-tm-tacr1-076517"
    },
    {
        "name": "G Gard 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-gard-20-mg-tablet-10-tm-tacr1-091319"
    },
    {
        "name": "G Gard D Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-gard-d-tablet-10-tm-tacr1-097516"
    },
    {
        "name": "K Ii Soap 75gm",
        "link": "https://www.truemeds.in/otc/k-ii-soap-75gm-tm-soap1-001010"
    },
    {
        "name": "K Ion Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-ion-10-mg-tablet-10-tm-tacr1-020189"
    },
    {
        "name": "K Joint Tablet 10",
        "link": "https://www.truemeds.in/otc/k-joint-tablet-10-tm-tacr1-098393"
    },
    {
        "name": "K K Liv Sf Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/k-k-liv-sf-syrup-200-ml-tm-syup1-011217"
    },
    {
        "name": "K K Zyme Sf Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/k-k-zyme-sf-syrup-200-ml-tm-syup1-011216"
    },
    {
        "name": "K L S 0.5 % Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/k-l-s-05-drops-5-ml-tm-dohe1-000475"
    },
    {
        "name": "K Lid Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-lid-600-mg-tablet-10-tm-tacr1-103468"
    },
    {
        "name": "K Life Bpm 108 Fully Automatic Digital Blood Pressure Monitor 1",
        "link": "https://www.truemeds.in/otc/k-life-bpm-108-fully-automatic-digital-blood-pressure-monitor-1-tm-cram1-000368"
    },
    {
        "name": "K Life Ftp 103 Blue Pulse Oximeter 1",
        "link": "https://www.truemeds.in/otc/k-life-ftp-103-blue-pulse-oximeter-1-tm-cram1-000388"
    },
    {
        "name": "K Life Glucolab Auto Coding Blood Glucose Test Strip 50",
        "link": "https://www.truemeds.in/otc/k-life-glucolab-auto-coding-blood-glucose-test-strip-50-tm-stps1-000140"
    },
    {
        "name": "K Life Glucometer Blood Glucose Sugar Testing Machine With 25 Test Strip White Kit 1",
        "link": "https://www.truemeds.in/otc/k-life-glucometer-blood-glucose-sugar-testing-machine-with-25-test-strip-white-kit-1-tm-cram1-000243"
    },
    {
        "name": "K Life Gluneo Lite Black Blood Glucose Monitoring System With 25 Test Strips",
        "link": "https://www.truemeds.in/otc/k-life-gluneo-lite-black-blood-glucose-monitoring-system-with-25-test-strips-tm-cram1-000372"
    },
    {
        "name": "K Life Gluneo Lite Blood Glucose Test Strip 100",
        "link": "https://www.truemeds.in/otc/k-life-gluneo-lite-blood-glucose-test-strip-100-tm-stps1-000128"
    },
    {
        "name": "K Life Gluneo Lite Blood Glucose Test Strip 50",
        "link": "https://www.truemeds.in/otc/k-life-gluneo-lite-blood-glucose-test-strip-50-tm-stps1-000107"
    },
    {
        "name": "K Life Neb 101 Compressor System Nebulizer 1",
        "link": "https://www.truemeds.in/otc/k-life-neb-101-compressor-system-nebulizer-1-tm-neap1-000029"
    },
    {
        "name": "K Life Neb 107 White Portable Piston Compressor With Complete Mask Kit Nebulizer 1",
        "link": "https://www.truemeds.in/otc/k-life-neb-107-white-portable-piston-compressor-with-complete-mask-kit-nebulizer-1-tm-kiit1-000319"
    },
    {
        "name": "M Fert Od Tablet 10",
        "link": "https://www.truemeds.in/otc/m-fert-od-tablet-10-tm-tacr1-079483"
    },
    {
        "name": "M Fert Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-fert-tablet-10-TM-TACR1-048167"
    },
    {
        "name": "M Fight Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/m-fight-injection-2-ml-tm-inon2-015343"
    },
    {
        "name": "M Fix 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-fix-200-mg-tablet-10-tm-taer1-002616"
    },
    {
        "name": "M Fixime 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-fixime-200-mg-tablet-10-tm-tacr1-099011"
    },
    {
        "name": "M Fluk 150 MG Tablet 1",
        "link": "https://www.truemeds.in/medicine/m-fluk-150-mg-tablet-1-tm-tacr1-091504"
    },
    {
        "name": "M Fx 10/120 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-fx-10120-mg-tablet-10-tm-tacr1-088241"
    },
    {
        "name": "M Heal 4 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-heal-4-mg-tablet-10-tm-taer1-002297"
    },
    {
        "name": "M Joint Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-joint-tablet-10-TM-TACR1-052847"
    },
    {
        "name": "M Joint Tablet 30",
        "link": "https://www.truemeds.in/medicine/m-joint-tablet-30-tm-tacr1-063332"
    },
    {
        "name": "M Kast 4 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-kast-4-mg-tablet-10-tm-tacr1-023070"
    },
    {
        "name": "M Kast 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-kast-5-mg-tablet-10-tm-tacr1-023071"
    },
    {
        "name": "M Laz Cream 30gm",
        "link": "https://www.truemeds.in/medicine/m-laz-cream-30-gm-tm-coom1-005341"
    },
    {
        "name": "M Laz Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-laz-25050-mg-tablet-10-tm-tacr1-069124"
    },
    {
        "name": "M Let Am 5/25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-let-am-525-mg-tablet-10-tm-tacr1-085476"
    },
    {
        "name": "M Let T 40/50 MG Tablet Er 10",
        "link": "https://www.truemeds.in/medicine/m-let-t-4050-mg-tablet-10-tm-tacr1-085290"
    },
    {
        "name": "Jagnor 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/jagnor-200-mg-tablet-10-tm-tacr1-098384"
    },
    {
        "name": "Jagnor Of Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/jagnor-of-dry-syrup-30-ml-tm-drup1-002684"
    },
    {
        "name": "Jagpod 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/jagpod-200-mg-tablet-10-tm-taer1-002210"
    },
    {
        "name": "Jagquin 125 MG Syrup 450 ML",
        "link": "https://www.truemeds.in/medicine/jagquin-125-mg-syrup-450-ml-tm-syup1-002206"
    },
    {
        "name": "Jagquin 125 MG Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/jagquin-125-mg-syrup-60-ml-tm-syup1-002207"
    },
    {
        "name": "Jagquin 250 MG Tablet 100",
        "link": "https://www.truemeds.in/medicine/jagquin-250-mg-tablet-100-tm-tacr1-019923"
    },
    {
        "name": "Jagquin 250mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/jagquin-250-mg-tablet-10-tm-tacr1-019922"
    },
    {
        "name": "Jagquin 40 MG Injection 30 ML",
        "link": "https://www.truemeds.in/medicine/jagquin-40-mg-injection-30-ml-tm-inon2-004086"
    },
    {
        "name": "Jagril Spas 20/500mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/jagril-spas-20500-mg-tablet-10-tm-tacr1-019924"
    },
    {
        "name": "Jagril Spas 20/500mg Tablet 100",
        "link": "https://www.truemeds.in/medicine/jagril-spas-20500-mg-tablet-100-tm-tacr1-019925"
    },
    {
        "name": "Jaiclav 375 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/jaiclav-375-mg-tablet-10-tm-tacr1-098678"
    },
    {
        "name": "Jaiho 8/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/jaiho-8500-mg-tablet-10-tm-tacr1-019926"
    },
    {
        "name": "Jain Arjun Chaal Powder 500gm",
        "link": "https://www.truemeds.in/otc/jain-arjun-chaal-powder-500gm-tm-poer1-003995"
    },
    {
        "name": "Jain Ashwagandha Powder 500 GM",
        "link": "https://www.truemeds.in/otc/jain-ashwagandha-powder-500-gm-tm-poer1-003342"
    },
    {
        "name": "Jain Ashwagandha Tablet 60",
        "link": "https://www.truemeds.in/otc/jain-ashwagandha-tablet-60-tm-tacr1-082060"
    },
    {
        "name": "Jain Brahmi Powder 400gm",
        "link": "https://www.truemeds.in/otc/jain-brahmi-powder-400gm-tm-poer1-004270"
    },
    {
        "name": "L Cetril 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetril-5-mg-tablet-10-tm-tacr1-090064"
    },
    {
        "name": "L Cetriver 10 Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetriver-10-mg-tablet-10-tm-tacr1-057268"
    },
    {
        "name": "L Cetriver 5 Md Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetriver-md-5-mg-tablet-10-tm-tamr1-000656"
    },
    {
        "name": "L Cetriver 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetriver-5-mg-tablet-10-tm-tacr1-021109"
    },
    {
        "name": "L Cetriver Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/l-cetriver-syrup-30-ml-tm-syup1-011549"
    },
    {
        "name": "L Cetriyl M Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetriyl-m-tablet-10-tm-tacr1-101308"
    },
    {
        "name": "L Cetriyl Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetriyl-5-mg-tablet-10-tm-tacr1-102359"
    },
    {
        "name": "L Cetrizet 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetrizet-5-mg-tablet-10-tm-tacr1-020646"
    },
    {
        "name": "L Cetron 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetron-10-mg-tablet-10-tm-tacr1-020647"
    },
    {
        "name": "L Cetron 2.5 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/l-cetron-25-mg-syrup-30-ml-tm-syup1-002358"
    },
    {
        "name": "L Cetron Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cetron-5-mg-tablet-10-tm-tacr1-020648"
    },
    {
        "name": "L Cid 30 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/l-cid-30-mg-capsule-10-tm-cacr1-002894"
    },
    {
        "name": "L Cin 250 Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cin-250-mg-tablet-10-tm-tacr1-020679"
    },
    {
        "name": "L Cin 250 Tablet 5",
        "link": "https://www.truemeds.in/medicine/l-cin-250-mg-tablet-5-tm-tacr1-020680"
    },
    {
        "name": "L Cin 500 Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cin-500-mg-tablet-10-tm-tacr1-020681"
    },
    {
        "name": "L Cin 750 Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-cin-750-mg-tablet-10-tm-tacr1-020682"
    },
    {
        "name": "R Flox 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-flox-250-mg-tablet-10-tm-tacr1-032827"
    },
    {
        "name": "R Flox 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-flox-reliance-500-mg-tablet-10-tm-tacr1-032828"
    },
    {
        "name": "R Flox 750 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-flox-reliance-750-mg-tablet-10-tm-tacr1-032829"
    },
    {
        "name": "R For Rabbit Feather Pant Style 12 To 17 Kgs Xl Diapers 70",
        "link": "https://www.truemeds.in/otc/r-for-rabbit-feather-pant-style-12-to-17-kgs-xl-diapers-70-tm-1-dec-000383"
    },
    {
        "name": "R For Rabbit Feather Pant Style Large Diaper 24",
        "link": "https://www.truemeds.in/otc/r-for-rabbit-feather-pant-style-large-diaper-24-tm-1-dec-000381"
    },
    {
        "name": "R For Rabbit Feather Pant Style Medium Diaper 26",
        "link": "https://www.truemeds.in/otc/r-for-rabbit-feather-pant-style-medium-diaper-26-tm-1-dec-000387"
    },
    {
        "name": "R For Rabbit Feather Small 5 To 9kg Pant Style Diapers 74",
        "link": "https://www.truemeds.in/otc/r-for-rabbit-feather-small-pant-style-diaper-74-tm-1-dec-000382"
    },
    {
        "name": "R For Rabbit Feather Xxl Pant Style Diaper 46",
        "link": "https://www.truemeds.in/otc/r-for-rabbit-feather-xxl-pant-style-diaper-46-tm-1-dec-000380"
    },
    {
        "name": "R For Rabbit First Feed 240ml Glass Feeding Bottle 1",
        "link": "https://www.truemeds.in/otc/r-for-rabbit-first-feed-glass-feeding-bottle-240ml-tm-bott1-000068"
    },
    {
        "name": "R Gin 500 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/r-gin-500-mg-capsule-10-tm-cacr1-004833"
    },
    {
        "name": "R Gin Powder 15 GM",
        "link": "https://www.truemeds.in/medicine/r-gin-powder-15-gm-tm-poer1-000349"
    },
    {
        "name": "R Gold 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-gold-20-mg-tablet-10-tm-tacr1-032830"
    },
    {
        "name": "R Gold Dsr 30/20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-gold-dsr-3020-mg-tablet-10-tm-tacr1-032831"
    },
    {
        "name": "R Kast L Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-kast-l-105-mg-tablet-10-tm-tacr1-032832"
    },
    {
        "name": "R Liv 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-liv-300-mg-tablet-10-tm-tacr1-088706"
    },
    {
        "name": "R Loc 150 MG Tablet 4",
        "link": "https://www.truemeds.in/medicine/r-loc-150-mg-tablet-4-tm-tacr1-032860"
    },
    {
        "name": "P Dase 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-dase-10-mg-tablet-10-tm-tacr1-095373"
    },
    {
        "name": "P Dol Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-dol-tablet-10-tm-tacr1-088065"
    },
    {
        "name": "P Dox A Capsule 10",
        "link": "https://www.truemeds.in/medicine/p-dox-a-capsule-10-tm-cacr1-007960"
    },
    {
        "name": "P Dox Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-dox-tablet-10-tm-tacr1-048792"
    },
    {
        "name": "P Efde Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/p-efde-syrup-200-ml-tm-syup1-006648"
    },
    {
        "name": "P Efde Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-efde-tablet-10-tm-tacr1-048793"
    },
    {
        "name": "P Fen Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-fen-tablet-10-tm-tacr1-029984"
    },
    {
        "name": "P Fix 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-fix-200-mg-tablet-10-tm-tacr1-090280"
    },
    {
        "name": "P Fixim 50 MG Oral Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/p-fixim-50-mg-oral-suspension-30-ml-tm-orps1-000026"
    },
    {
        "name": "P Fixim Cv 200/125 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-fixim-cv-200125-mg-tablet-10-tm-tacr1-029985"
    },
    {
        "name": "P G More 150 Capsule 10",
        "link": "https://www.truemeds.in/medicine/pg-more-150-mg-capsule-10-tm-cacr1-016328"
    },
    {
        "name": "P G More 75 Capsule 10",
        "link": "https://www.truemeds.in/medicine/pg-more-75-capsule-10-tm-cacr1-013548"
    },
    {
        "name": "P G More Nt Tablet 10",
        "link": "https://www.truemeds.in/medicine/pg-more-nt-tablet-10-tm-tacr1-080168"
    },
    {
        "name": "P Gaba Capsule 10",
        "link": "https://www.truemeds.in/medicine/pgaba-capsule-10-tm-cacr1-004472"
    },
    {
        "name": "P Glitz 30 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-glitz-30-mg-tablet-10-tm-tacr1-029986"
    },
    {
        "name": "P I O Ointment 15 GM",
        "link": "https://www.truemeds.in/medicine/p-i-o-ointment-15-gm-tm-oint1-001488"
    },
    {
        "name": "Q Mark Capsule 10",
        "link": "https://www.truemeds.in/otc/q-mark-capsule-10-tm-cacr1-013711"
    },
    {
        "name": "Q Max Infusion 100 ML",
        "link": "https://www.truemeds.in/medicine/q-max-infusion-100-ml-tm-iner1-000840"
    },
    {
        "name": "Q Meco Plus Capsule 10",
        "link": "https://www.truemeds.in/otc/q-meco-plus-capsule-10-tm-cacr1-016035"
    },
    {
        "name": "Q Mek Capsule 10",
        "link": "https://www.truemeds.in/otc/q-mek-capsule-10-tm-cacr1-014595"
    },
    {
        "name": "Q Mek Pineapple Flavour Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/q-mek-pineapple-flavour-syrup-200-ml-tm-syup1-011432"
    },
    {
        "name": "Q Met 1000 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-met-1000-mg-tablet-10-tm-taet1-001282"
    },
    {
        "name": "Q Met 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-met-250-mg-tablet-10-tm-tacr1-076450"
    },
    {
        "name": "Q Met 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-met-500-mg-tablet-10-tm-tacr1-076452"
    },
    {
        "name": "Q Met 850 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-met-850-mg-tablet-10-tm-tacr1-076454"
    },
    {
        "name": "Q Mind 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-100-mg-tablet-10-tm-tacr1-032557"
    },
    {
        "name": "Q Mind 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-200-mg-tablet-10-tm-tacr1-032558"
    },
    {
        "name": "Q Mind 25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-25-mg-tablet-10-tm-tacr1-032559"
    },
    {
        "name": "Q Mind 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-300-mg-tablet-10-tm-tacr1-032560"
    },
    {
        "name": "Q Mind 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-50-mg-tablet-10-tm-tacr1-032561"
    },
    {
        "name": "Q Mind Sr 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-sr-100-mg-tablet-10-tm-tacr1-032562"
    },
    {
        "name": "Q Mind Sr 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-mind-sr-200-mg-tablet-10-tm-tacr1-032563"
    },
    {
        "name": "O Moxy Cl Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-moxy-cl-tablet-10-tm-tacr1-091192"
    },
    {
        "name": "O Mx 50/325/250 MG Capsule 8",
        "link": "https://www.truemeds.in/medicine/o-mx-50325250-mg-capsule-8-tm-cacr1-003893"
    },
    {
        "name": "O Powercef 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-powercef-100-mg-tablet-10-tm-tacr1-027904"
    },
    {
        "name": "O Powercef 200 MG Tablet 4",
        "link": "https://www.truemeds.in/medicine/o-powercef-200-mg-tablet-4-tm-tacr1-027905"
    },
    {
        "name": "O Powercef 50 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/o-powercef-50-mg-syrup-30-ml-tm-syup1-003080"
    },
    {
        "name": "O Powercef Dt 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-powercef-dt-100-mg-tablet-10-tm-tacr1-027906"
    },
    {
        "name": "O Ppi 20mg Capsule 10",
        "link": "https://www.truemeds.in/medicine/o-ppi-20-mg-capsule-10-tm-cacr1-003894"
    },
    {
        "name": "O Q M 50/100 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/o-q-m-50100-mg-suspension-30-ml-tm-sury1-001117"
    },
    {
        "name": "O Q M 50/100 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/o-q-m-50100-mg-suspension-60-ml-tm-sury1-001118"
    },
    {
        "name": "O Q M Ds 100/200 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/o-q-m-ds-100200-mg-suspension-60-ml-tm-sury1-001119"
    },
    {
        "name": "O Relate 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-relate-20-mg-tablet-10-tm-tacr1-075361"
    },
    {
        "name": "O Relate 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-relate-40-mg-tablet-10-tm-tacr1-075364"
    },
    {
        "name": "O Relate 40 MG Tablet 15",
        "link": "https://www.truemeds.in/medicine/o-relate-40-mg-tablet-15-tm-tacr1-075366"
    },
    {
        "name": "O Relate Ah 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-relate-ah-40-mg-tablet-10-tm-tacr1-075374"
    },
    {
        "name": "O Relate Ah 40 MG Tablet 15",
        "link": "https://www.truemeds.in/medicine/o-relate-ah-40-mg-tablet-15-tm-tacr1-075378"
    },
    {
        "name": "O Ron 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/o-ron-200-mg-tablet-10-tm-tacr1-027908"
    },
    {
        "name": "N Zole 25 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/n-zole-25-mg-injection-1-ml-tm-inon2-005397"
    },
    {
        "name": "N Zole 50 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/n-zole-50-mg-injection-1-ml-tm-inon2-005398"
    },
    {
        "name": "N.s (parenteral) Infusion 3000 ML",
        "link": "https://www.truemeds.in/medicine/ns-parenteral-infusion-3000-ml-tm-iner1-000669"
    },
    {
        "name": "N.s (venus ) Infusion 3000 ML",
        "link": "https://www.truemeds.in/medicine/ns-venus-infusion-3000-ml-tm-iner1-000673"
    },
    {
        "name": "N.s Infusion 100 ML",
        "link": "https://www.truemeds.in/medicine/ns-venus-infusion-100-ml-tm-iner1-000672"
    },
    {
        "name": "N.s Infusion 1000 ML",
        "link": "https://www.truemeds.in/medicine/ns-parentral-infusion-1000-ml-tm-iner1-000670"
    },
    {
        "name": "N.s Infusion 500 ML",
        "link": "https://www.truemeds.in/medicine/ns-parentral-infusion-500-ml-tm-iner1-000671"
    },
    {
        "name": "N.s Solution 100 ML",
        "link": "https://www.truemeds.in/medicine/ns-astra-solution-100-ml-tm-soon2-000547"
    },
    {
        "name": "N3d Tablet 10",
        "link": "https://www.truemeds.in/medicine/n3d-tablet-10-tm-tacr1-048431"
    },
    {
        "name": "N3eol Capsule 10",
        "link": "https://www.truemeds.in/otc/n3eol-capsule-10-tm-cacr1-016848"
    },
    {
        "name": "Naaz 0.25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/naaz-025-mg-tablet-10-tm-tacr1-025818"
    },
    {
        "name": "Naaz 0.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/naaz-05-mg-tablet-10-tm-tacr1-025819"
    },
    {
        "name": "Naaz Plus 0.5/20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/naaz-plus-0520-mg-tablet-10-tm-tacr1-025820"
    },
    {
        "name": "Naaz Plus F Tablet 10",
        "link": "https://www.truemeds.in/medicine/naaz-plus-f-tablet-10-tm-tacr1-048432"
    },
    {
        "name": "Naaz Plus H Tablet 10",
        "link": "https://www.truemeds.in/medicine/naaz-plus-h-tablet-10-tm-tacr1-048433"
    },
    {
        "name": "Nab Altaxel Injection 1",
        "link": "https://www.truemeds.in/medicine/nab-altaxel-100-mg-injection-1-tm-inon2-014777"
    },
    {
        "name": "V Glyme M 80 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-glyme-m-80-mg-tablet-10-tm-taet1-001324"
    },
    {
        "name": "V Gold Capsule 30",
        "link": "https://www.truemeds.in/otc/v-gold-capsule-30-tm-cacr1-016860"
    },
    {
        "name": "V Gold Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-gold-tablet-10-tm-tacr1-062536"
    },
    {
        "name": "V Gon D Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-gon-d-tablet-10-tm-tacr1-049722"
    },
    {
        "name": "V Hist 8mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-hist-8-mg-tablet-10-tm-tacr1-101146"
    },
    {
        "name": "V Ket 0.4 % Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/v-ket-04-drops-10-ml-tm-dohe1-001011"
    },
    {
        "name": "V Kuf Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/v-kuf-syrup-100-ml-tm-syup1-011648"
    },
    {
        "name": "V Kul Eye Drops 10ml",
        "link": "https://www.truemeds.in/medicine/v-kul-drops-5-ml-tm-dohe1-001012"
    },
    {
        "name": "V Letra 33.3/133.3 MG Capsule 60",
        "link": "https://www.truemeds.in/medicine/v-letra-3331333-mg-capsule-60-tm-cacr1-006243"
    },
    {
        "name": "V Letra 33.3/133.3 MG Capsule 90",
        "link": "https://www.truemeds.in/medicine/v-letra-3331333-mg-capsule-90-tm-cacr1-006244"
    },
    {
        "name": "V Levo 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-levo-500-mg-tablet-10-tm-tacr1-088283"
    },
    {
        "name": "V Meal 0.2 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-meal-02-mg-tablet-10-tm-tacr1-084032"
    },
    {
        "name": "V Med D3 Nano Shots Orange Flavour Sugar Free Solution 5ml",
        "link": "https://www.truemeds.in/otc/v-med-d3-orange-sugar-free-nano-shots-oral-solution-5-ml-tm-oron2-000135"
    },
    {
        "name": "V Mela Gel 30gm",
        "link": "https://www.truemeds.in/otc/v-mela-gel-30-gm-tm-geel1-002557"
    },
    {
        "name": "V Moxin 500mg Capsule 10",
        "link": "https://www.truemeds.in/medicine/v-moxin-500-mg-capsule-10-tm-cacr1-016112"
    },
    {
        "name": "V Ph Capsule 14",
        "link": "https://www.truemeds.in/otc/vph-capsule-14-tm-cacr1-009442"
    },
    {
        "name": "S Clear Cream 10gm",
        "link": "https://www.truemeds.in/medicine/s-clear-1-cream-10-gm-tm-coom1-004318"
    },
    {
        "name": "S Clear Cream 5gm",
        "link": "https://www.truemeds.in/medicine/s-clear-1-cream-5-gm-tm-coom1-004317"
    },
    {
        "name": "S Clear Lotion 10ml",
        "link": "https://www.truemeds.in/medicine/s-clear-lotion-10-ml-tm-loes1-001950"
    },
    {
        "name": "S Cold Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-coldplus-tablet-10-tm-tacr1-093507"
    },
    {
        "name": "S Cort 6 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-cort-6-mg-tablet-10-tm-tacr1-091755"
    },
    {
        "name": "S Deno 400mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-deno-400mg-tablet-10-tm-tacr1-110830"
    },
    {
        "name": "S Em Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-em-4-mg-tablet-10-tm-tacr1-100400"
    },
    {
        "name": "S Fex Xt Capsule 10",
        "link": "https://www.truemeds.in/medicine/s-fex-xt-capsule-10-tm-cacr1-008178"
    },
    {
        "name": "S Film 50 Orally Disintegrating Strips 5",
        "link": "https://www.truemeds.in/medicine/s-film-50-mg-film-5-tm-film1-000002"
    },
    {
        "name": "S Fl 150 MG Tablet 3",
        "link": "https://www.truemeds.in/medicine/s-fl-150-mg-tablet-3-tm-tacr1-093778"
    },
    {
        "name": "S Flo Solution 100 ML",
        "link": "https://www.truemeds.in/otc/s-flo-solution-100-ml-tm-soon2-000570"
    },
    {
        "name": "S Gary New 400 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/s-gary-new-400-mg-tablet-5-tm-tacr1-035513"
    },
    {
        "name": "S Gel 10gm",
        "link": "https://www.truemeds.in/otc/s-gel-10-gm-tm-tube1-000025"
    },
    {
        "name": "S Gel 25gm",
        "link": "https://www.truemeds.in/otc/s-gel-25-gm-tm-tube1-000026"
    },
    {
        "name": "S Jdliv Sugar Free Liver Tonic 200ml",
        "link": "https://www.truemeds.in/otc/s-jdliv-sugar-free-liver-tonic-200ml-tm-lisf1-000037"
    },
    {
        "name": "S Lactone 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-lactone-100-mg-tablet-10-tm-tacr1-059910"
    },
    {
        "name": "Ub 10 Lc Tablet 10",
        "link": "https://www.truemeds.in/otc/ub-10lc-tablet-10-tm-cacr1-009363"
    },
    {
        "name": "Ub 150 Capsule 10",
        "link": "https://www.truemeds.in/otc/ub-150-capsule-10-tm-cacr1-018004"
    },
    {
        "name": "Ub Add Q10 Tablet 10",
        "link": "https://www.truemeds.in/otc/ub-add-q10-tablet-10-tm-tacr1-107923"
    },
    {
        "name": "Ub Fair Facewash 60 ML",
        "link": "https://www.truemeds.in/medicine/ub-fair-facewash-60-ml-tm-fash1-000134"
    },
    {
        "name": "Ub10 Capsule 10",
        "link": "https://www.truemeds.in/medicine/ub10-capsule-10-tm-cacr1-008365"
    },
    {
        "name": "Ubcam 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ubcam-20-mg-tablet-10-tm-tacr1-041680"
    },
    {
        "name": "Ubchol Tablet 10",
        "link": "https://www.truemeds.in/medicine/ubchol-300-mg-tablet-10-tm-tacr1-100376"
    },
    {
        "name": "Ubd Max Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubd-max-softgel-capsule-10-tm-sole1-000377"
    },
    {
        "name": "Ubefine Tablet 10",
        "link": "https://www.truemeds.in/otc/ubefine-tablet-10-tm-tacr1-089453"
    },
    {
        "name": "Ubefit Tablet 10",
        "link": "https://www.truemeds.in/medicine/ubefit-50030200-mg-tablet-10-tm-tacr1-051774"
    },
    {
        "name": "Ubelac Wash Liquid 120 ML",
        "link": "https://www.truemeds.in/otc/ubelac-wash-liquid-120-ml-tm-lint1-000676"
    },
    {
        "name": "Uber 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/uber-100-mg-tablet-10-tm-taer1-002717"
    },
    {
        "name": "Uber 250 Tablet 6",
        "link": "https://www.truemeds.in/medicine/uber-250-mg-tablet-6-tm-tacr1-100824"
    },
    {
        "name": "Uber 500 Tablet 3",
        "link": "https://www.truemeds.in/medicine/uber-500-mg-tablet-3-tm-tacr1-103030"
    },
    {
        "name": "Ubercid Dsr 30/40 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubercid-dsr-3040-mg-capsule-10-tm-caer1-000156"
    },
    {
        "name": "Ubermet 1000 MG Sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/ubermet-1000-mg-sr-tablet-10-tm-taet1-001550"
    },
    {
        "name": "Walaphage 850 Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-850-mg-tablet-15-tm-tacr1-043615"
    },
    {
        "name": "Walaphage G 1 Forte Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-g-forte-11000-mg-tablet-sr-15-tm-tacr1-043619"
    },
    {
        "name": "Walaphage G 1 Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-g-1500-mg-tablet-pr-15-tm-tacr1-043617"
    },
    {
        "name": "Walaphage G 1/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/walaphage-g-150-mg-tablet-10-tm-tacr1-043616"
    },
    {
        "name": "Walaphage G 2 Forte Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-g-forte-21000-mg-tablet-pr-15-tm-tacr1-043620"
    },
    {
        "name": "Walaphage G 2 Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-g-2500-mg-tablet-15-tm-tacr1-043618"
    },
    {
        "name": "Walaphage Gp 1/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/walaphage-gp-1500-mg-tablet-10-tm-tacr1-043621"
    },
    {
        "name": "Walaphage Gp 2/500mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/walaphage-gp-2500-mg-tablet-10-tm-tacr1-043622"
    },
    {
        "name": "Walaphage Sr 1000 Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-1000-mg-tablet-sr-15-tm-tasr1-001109"
    },
    {
        "name": "Walaphage Sr 500 Tablet 10",
        "link": "https://www.truemeds.in/medicine/walaphage-500-mg-tablet-sr-10-tm-tasr1-001110"
    },
    {
        "name": "Walaphage Sr 500 Tablet 15",
        "link": "https://www.truemeds.in/medicine/walaphage-500-mg-tablet-sr-15-tm-tasr1-001111"
    },
    {
        "name": "Walasa 400mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/walasa-400-mg-tablet-10-tm-tacr1-043623"
    },
    {
        "name": "Walasa 800mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/walasa-800-mg-tablet-10-tm-tacr1-043624"
    },
    {
        "name": "Walatral Ors Orange Flavour Powder 4.2gm",
        "link": "https://www.truemeds.in/otc/walatral-ors-orange-flavour-powder-42gm-tm-poer1-004153"
    },
    {
        "name": "Walazit 100 MG Suspension 15 ML",
        "link": "https://www.truemeds.in/medicine/walazit-100-mg-suspension-15-ml-tm-sury1-001717"
    },
    {
        "name": "Walazit 200 MG Suspension 15 ML",
        "link": "https://www.truemeds.in/medicine/walazit-200-mg-suspension-15-ml-tm-sury1-001718"
    },
    {
        "name": "X Potus Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/x-potus-syrup-100-ml-tm-syup1-007378"
    },
    {
        "name": "X Pril 2.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-pril-25-mg-tablet-10-tm-tacr1-043899"
    },
    {
        "name": "X Pril 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-pril-5-mg-tablet-10-tm-tacr1-043900"
    },
    {
        "name": "X Ride 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-ride-10-mg-tablet-10-tm-tacr1-088330"
    },
    {
        "name": "X Scar Gel 15gm",
        "link": "https://www.truemeds.in/medicine/xscar-gel-15-gm-tm-geel1-001848"
    },
    {
        "name": "X Tran 500 Injection 5ml",
        "link": "https://www.truemeds.in/medicine/x-tran-500-mg-injection-1-tm-inon2-008604"
    },
    {
        "name": "X Tran Mf Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-tran-mf-tablet-10-tm-tacr1-043901"
    },
    {
        "name": "X Trant 140 MG Capsule 100",
        "link": "https://www.truemeds.in/medicine/x-trant-140-mg-capsule-100-tm-cacr1-006454"
    },
    {
        "name": "X Vir 0.5mg Tablet 30",
        "link": "https://www.truemeds.in/medicine/x-vir-05-mg-tablet-30-tm-tacr1-043902"
    },
    {
        "name": "X Vir 1 MG Tablet 30",
        "link": "https://www.truemeds.in/medicine/x-vir-1-mg-tablet-30-tm-tacr1-043903"
    },
    {
        "name": "X Vis 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-vis-500-mg-tablet-10-tm-tacr1-088234"
    },
    {
        "name": "X Vis Cv Tablet 6",
        "link": "https://www.truemeds.in/medicine/x-vis-cv-tablet-6-tm-tacr1-090412"
    },
    {
        "name": "X Well 500 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/x-well-500-mg-tablet-6-tm-tacr1-088089"
    },
    {
        "name": "X Worm Plus 400 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/x-worm-plus-400-mg-tablet-10-tm-tacr1-043905"
    },
    {
        "name": "X Worm Tablet 1",
        "link": "https://www.truemeds.in/medicine/x-worm-400-mg-tablet-1-tm-tacr1-043904"
    },
    {
        "name": "X-ceff 1000 MG Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/x-ceff-1000-mg-injection-5-ml-tm-inon2-008602"
    },
    {
        "name": "T Gad 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-20-mg-tablet-10-tm-tacr1-038030"
    },
    {
        "name": "T Gad 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-40-mg-tablet-10-tm-tacr1-038031"
    },
    {
        "name": "T Gad 80 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-80-mg-tablet-10-tm-tacr1-038032"
    },
    {
        "name": "T Gad Am 20/5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-am-205-mg-tablet-10-tm-tacr1-038033"
    },
    {
        "name": "T Gad Am 40/5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-am-405-mg-tablet-10-tm-tacr1-038034"
    },
    {
        "name": "T Gad Amc 20/5/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-amc-205125-mg-tablet-10-tm-tacr1-038035"
    },
    {
        "name": "T Gad Amc 40/5/12.5  MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-amc-405125-mg-tablet-10-tm-tacr1-051634"
    },
    {
        "name": "T Gad C 40/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-c-40125-mg-tablet-10-tm-tacr1-038037"
    },
    {
        "name": "T Gad H 20/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-h-20125-mg-tablet-10-tm-tacr1-038038"
    },
    {
        "name": "T Gad H 40/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-gad-h-40125-mg-tablet-10-tm-tacr1-038039"
    },
    {
        "name": "T Glim M 500/20 MG Tablet Er 10",
        "link": "https://www.truemeds.in/medicine/t-glim-m-50020-mg-tablet-er-10-tm-taet1-000610"
    },
    {
        "name": "T Glip 20 Tablet 20",
        "link": "https://www.truemeds.in/medicine/tglip-20-mg-tablet-20-tm-tacr1-039725"
    },
    {
        "name": "T Glip M 1000 Tablet 20",
        "link": "https://www.truemeds.in/medicine/tglip-m-201000-mg-tablet-er-20-tm-tacr1-039727"
    },
    {
        "name": "T Glip M 500 Tablet 20",
        "link": "https://www.truemeds.in/medicine/tglip-m-500-mg-tablet-er-20-tm-tacr1-052228"
    },
    {
        "name": "T Heal Capsule 10",
        "link": "https://www.truemeds.in/medicine/t-heal-capsule-10-TM-CACR1-009921"
    },
    {
        "name": "T Heal Capsule 15",
        "link": "https://www.truemeds.in/otc/t-heal-capsule-15-tm-cacr1-013436"
    },
    {
        "name": "Z Sar A Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-sar-a-tablet-10-tm-tacr1-094131"
    },
    {
        "name": "Z Sar H Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-sar-h-tablet-10-tm-tacr1-094139"
    },
    {
        "name": "Z Sporlac Powder 1 GM",
        "link": "https://www.truemeds.in/otc/z-sporlac-powder-1-gm-tm-poer1-001953"
    },
    {
        "name": "Z Tel 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-tel-40-mg-tablet-10-tm-tacr1-088256"
    },
    {
        "name": "Z Vas Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-vas-tablet-10-tm-tacr1-049932"
    },
    {
        "name": "Z Vidol Capsule 10",
        "link": "https://www.truemeds.in/otc/z-vidol-102-mg-capsule-10-tm-cacr1-009456"
    },
    {
        "name": "Z-1 200 MG Suspension 15 ML",
        "link": "https://www.truemeds.in/medicine/z-1-200-mg-suspension-15-ml-tm-sury1-001756"
    },
    {
        "name": "Z-1 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-1-250-mg-tablet-10-tm-tacr1-044302"
    },
    {
        "name": "Z-1 250 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/z-1-250-mg-tablet-6-tm-tacr1-044303"
    },
    {
        "name": "Z-1 500 MG Tablet 3",
        "link": "https://www.truemeds.in/medicine/z-1-500-mg-tablet-3-tm-tacr1-044304"
    },
    {
        "name": "Z-1 Xl 200 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/z-1-250-mg-syrup-60-ml-tm-syup1-004545"
    },
    {
        "name": "Z-ozole 20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/z-ozole-20-mg-capsule-10-tm-cacr1-006475"
    },
    {
        "name": "Z-stat 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-stat-10-mg-tablet-10-tm-tacr1-044305"
    },
    {
        "name": "Z-stat 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/z-stat-5-mg-tablet-10-tm-tacr1-044306"
    },
    {
        "name": "Z&d 10 MG Tablet Dt 7",
        "link": "https://www.truemeds.in/otc/zd-10-mg-tablet-dt-7-tm-taer1-001011"
    },
    {
        "name": "Z&d Plus Drops 15 ML",
        "link": "https://www.truemeds.in/otc/zd-plus-drops-15-ml-tm-dohe1-001492"
    },
    {
        "name": "Ybose Plus 0.3 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ybose-plus-03-mg-tablet-10-tm-tasr1-002569"
    },
    {
        "name": "Ybz 400 MG Suspension 15 ML",
        "link": "https://www.truemeds.in/medicine/ybz-400-mg-suspension-15-ml-tm-sury1-002746"
    },
    {
        "name": "Ycepo 100 MG Tablet Dt 10",
        "link": "https://www.truemeds.in/medicine/ycepo-100-mg-tablet-dt-10-tm-taer1-001010"
    },
    {
        "name": "Ycepo 100 Suspension 30ml",
        "link": "https://www.truemeds.in/medicine/ycepo-100-mg-suspension-30-ml-tm-sury1-001753"
    },
    {
        "name": "Ycepo 200 MG Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/ycepo-200-mg-dry-syrup-30-ml-tm-drup1-000794"
    },
    {
        "name": "Ycepo 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ycepo-200-mg-tablet-10-tm-tacr1-044271"
    },
    {
        "name": "Ycepo Cv 200/125 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ycepo-cv-200125-mg-tablet-10-tm-tacr1-044272"
    },
    {
        "name": "Ycer P Tablet 10",
        "link": "https://www.truemeds.in/medicine/ycer-p-tablet-10-tm-tacr1-100922"
    },
    {
        "name": "Ycim 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ycim-100-mg-tablet-10-tm-tacr1-044273"
    },
    {
        "name": "Ycim 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ycim-200-mg-tablet-10-tm-tacr1-044274"
    },
    {
        "name": "Yclast Injection 100 ML",
        "link": "https://www.truemeds.in/medicine/yclast-injection-100-ml-tm-inon2-009796"
    },
    {
        "name": "Ycyst D Tablet 10",
        "link": "https://www.truemeds.in/otc/ycyst-d-tablet-10-tm-tacr1-051917"
    },
    {
        "name": "Ycyst M Tablet 10",
        "link": "https://www.truemeds.in/medicine/ycyst-m-tablet-10-tm-tacr1-044275"
    },
    {
        "name": "Yees 20 MG Tablet 15",
        "link": "https://www.truemeds.in/medicine/yees-20-mg-tablet-15-tm-tacr1-044277"
    },
    {
        "name": "Yees 40 Tablet 15",
        "link": "https://www.truemeds.in/medicine/yees-40-mg-tablet-15-tm-tacr1-044278"
    },
    {
        "name": "Yees 40mg Injection 1",
        "link": "https://www.truemeds.in/medicine/yees-40-mg-injection-1-tm-inon2-009797"
    },

    {
        "name": "Fabulon 40mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabulon-40-mg-tablet-10-tm-tacr1-014776"
    },
    {
        "name": "Fabulon 80mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabulon-80-mg-tablet-10-tm-tacr1-014777"
    },
    {
        "name": "Fabumox 500 Capsule 10",
        "link": "https://www.truemeds.in/medicine/fabumox-500-mg-capsule-10-tm-cacr1-015982"
    },
    {
        "name": "Fabupril 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabupril-10-mg-tablet-10-tm-tacr1-057420"
    },
    {
        "name": "Fabupril 2.5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabupril-25-mg-tablet-10-tm-tacr1-057421"
    },
    {
        "name": "Fabupril 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabupril-5-mg-tablet-10-tm-tacr1-057422"
    },
    {
        "name": "Fabutron 80mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabutron-80-mg-tablet-10-tm-tacr1-102671"
    },
    {
        "name": "Fabuvit Tablet 15",
        "link": "https://www.truemeds.in/medicine/fabuvit-tablet-15-tm-tacr1-057423"
    },
    {
        "name": "Fabuzest 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabuzest-40-mg-tablet-10-tm-tacr1-014778"
    },
    {
        "name": "Fabuzest 80mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabuzest-80-mg-tablet-10-tm-tacr1-014779"
    },
    {
        "name": "Fabuzinc Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabuzinc-tablet-10-tm-tacr1-057424"
    },
    {
        "name": "Fabvil Tablet 10",
        "link": "https://www.truemeds.in/medicine/fabvil-40-mg-tablet-10-tm-tacr1-102675"
    },
    {
        "name": "Fac 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/fac-50-mg-tablet-10-tm-tacr1-088140"
    },
    {
        "name": "Faccia S Face Wash 100ml",
        "link": "https://www.truemeds.in/otc/faccia-s-facewash-100-gm-tm-fash1-000469"
    },
    {
        "name": "Face Fine Bubble Foam Face Wash 60ml",
        "link": "https://www.truemeds.in/medicine/face-fine-face-wash-60-ml-tm-fash1-000151"
    },
    {
        "name": "Face One Cleansing Lotion 110 ML",
        "link": "https://www.truemeds.in/otc/face-one-cleansing-lotion-110-ml-tm-loes1-000888"
    },
    {
        "name": "B Fence Ointment 5gm",
        "link": "https://www.truemeds.in/medicine/bfence-ointment-5-gm-tm-oint1-000836"
    },
    {
        "name": "B Fine Od 20/20/5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-fine-od-20205-mg-tablet-10-tm-tacr1-004645"
    },
    {
        "name": "B Fit 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-fitjohns-500-mg-tablet-10-tm-tacr1-004646"
    },
    {
        "name": "B Fit Capsule 10",
        "link": "https://www.truemeds.in/otc/b-fit-capsule-10-tm-cacr1-008608"
    },
    {
        "name": "B Fit Cd Tablet 10",
        "link": "https://www.truemeds.in/otc/b-fit-cd-tablet-10-tm-cacr1-008609"
    },
    {
        "name": "B Fit Economy Xl Adult Diaper 10",
        "link": "https://www.truemeds.in/otc/b-fit-economy-xl-adult-diaper-10-tm-1-dec-000370"
    },
    {
        "name": "B Fit Large Adult Diaper Pants 10",
        "link": "https://www.truemeds.in/otc/b-fit-adult-diaper-pants-large-10-tm-1-dec-000246"
    },
    {
        "name": "B Floren Eye Drops 5ml",
        "link": "https://www.truemeds.in/medicine/bfloren-eye-drops-5-ml-tm-eynt2-000124"
    },
    {
        "name": "B Flox 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-flox-200-mg-tablet-10-tm-tacr1-065612"
    },
    {
        "name": "B Flox 50 MG Oral Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/b-flox-50-mg-oral-suspension-30-ml-tm-orps1-000523"
    },
    {
        "name": "B Flox Fc 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-flox-fc-200-mg-tablet-10-tm-tacr1-070774"
    },
    {
        "name": "B Folcin Drops 25 ML",
        "link": "https://www.truemeds.in/medicine/b-folcin-20-mg200mcg5mcg-drops-25-ml-tm-dohe1-000074"
    },
    {
        "name": "B Folcin Fd Tablet 10",
        "link": "https://www.truemeds.in/otc/b-folcin-fd-tablet-10-tm-tacr1-046140"
    },
    {
        "name": "B Folcin Gel 10gm",
        "link": "https://www.truemeds.in/medicine/b-folcin-87-gel-10-gm-tm-geel1-000149"
    },
    {
        "name": "B Folcin Kid Tablet 10",
        "link": "https://www.truemeds.in/otc/b-folcin-kid-tablet-10-tm-tacr1-046141"
    },
    {
        "name": "B Folcin Lac Dry Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/b-folcin-lac-dry-syrup-60-ml-tm-drup1-000838"
    },
    {
        "name": "A Rex  6 MG Drops 15 ML",
        "link": "https://www.truemeds.in/medicine/a-rex-6-mg-drops-15-ml-tm-dohe1-001108"
    },
    {
        "name": "A Rex 10mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-rex-10-mg-tablet-10-tm-tacr1-056223"
    },
    {
        "name": "A Rex 25mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-rex-25-mg-tablet-10-tm-tacr1-000053"
    },
    {
        "name": "A Rex 50 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/a-rex-50-mg-injection-2-ml-tm-inon2-010300"
    },
    {
        "name": "A Rex 6 MG Drop 100 ML",
        "link": "https://www.truemeds.in/medicine/a-rex-6-mg-drop-100-ml-tm-dohe1-001687"
    },
    {
        "name": "A Rex Syrup 110 ML",
        "link": "https://www.truemeds.in/medicine/a-rex-syrup-110-ml-tm-syup1-007476"
    },
    {
        "name": "A Set Mango Flavour Sugar Free Oral Suspension 170ml",
        "link": "https://www.truemeds.in/medicine/a-set-mango-flavour-sugar-free-oral-suspension-170-ml-tm-orps1-001559"
    },
    {
        "name": "A Sol 5 % Gel 30 GM",
        "link": "https://www.truemeds.in/medicine/a-sol-5-gel-30-gm-tm-geel1-002027"
    },
    {
        "name": "A Star P Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-star-p-10325-mg-tablet-10-tm-tacr1-069592"
    },
    {
        "name": "A Teem 80/480 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-teem-80480-mg-tablet-10-tm-tacr1-058249"
    },
    {
        "name": "A Tide 50 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/a-tide-50-mg-injection-1-tm-inon2-011612"
    },
    {
        "name": "A Tide Injection 1ml",
        "link": "https://www.truemeds.in/medicine/a-tide-100-mg-injection-1-tm-inon2-011848"
    },
    {
        "name": "A Tios 400 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a-tios-400-mg-tablet-10-tm-tacr1-057430"
    },
    {
        "name": "A To Z Amino Tablet 15",
        "link": "https://www.truemeds.in/otc/a-to-z-amino-tablet-10-tm-tacr1-086421"
    },
    {
        "name": "A To Z Cream 15 GM",
        "link": "https://www.truemeds.in/otc/a-to-z-cream-15-gm-tm-coom1-004054"
    },
    {
        "name": "A To Z Cv Capsule 10",
        "link": "https://www.truemeds.in/otc/a-to-z-cv-capsule-10-tm-cacr1-018883"
    },
    {
        "name": "C Fode 100 Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-fode-100-tablet-10-tm-tacr1-105311"
    },
    {
        "name": "C Fode 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-fode-200-tablet-10-tm-tacr1-105312"
    },
    {
        "name": "C Fode Cv Tablet 6",
        "link": "https://www.truemeds.in/medicine/c-fode-cv-tablet-6-tm-tacr1-105315"
    },
    {
        "name": "C Fode Dry Syrup 30ml",
        "link": "https://www.truemeds.in/medicine/c-fode-dry-syrup-30ml-tm-drup1-002854"
    },
    {
        "name": "C Forte 1000/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-forte-1000500-mg-injection-1-tm-inon2-000998"
    },
    {
        "name": "C Forte 250/125mg Injection 1",
        "link": "https://www.truemeds.in/medicine/c-forte-250125-mg-injection-1-tm-inon2-000999"
    },
    {
        "name": "C Foxid 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-foxid-100-mg-tablet-10-tm-tacr1-069345"
    },
    {
        "name": "C Foxid 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-foxid-50-mg-tablet-10-tm-tacr1-070127"
    },
    {
        "name": "C Freedo 0.25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-freedo-025-mg-tablet-10-tm-tacr1-071176"
    },
    {
        "name": "C Freedo 0.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-freedo-05-mg-tablet-10-tm-tacr1-071111"
    },
    {
        "name": "C Fresh 5 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/c-fresh-5-mg-syrup-30-ml-tm-syup1-009650"
    },
    {
        "name": "C Fresh L Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-fresh-l-5-mg-tablet-10-tm-tacr1-063628"
    },
    {
        "name": "C Fresh Lm Pineapple Flavour Suspension 60ml",
        "link": "https://www.truemeds.in/medicine/c-fresh-lm-suspension-60-ml-TM-SURY1-002232"
    },
    {
        "name": "C Fresh Lm Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-fresh-lm-10-5-mg-tablet-10-TM-TACR1-005929"
    },
    {
        "name": "C Fresh Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-fresh-10-mg-tablet-10-tm-tacr1-063699"
    },
    {
        "name": "C Fungin 50 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/c-fungin-50-mg-injection-1-tm-inon2-013501"
    },
    {
        "name": "D Fence Soap 75 GM",
        "link": "https://www.truemeds.in/otc/d-fence-soap-75-gm-tm-soap1-000222"
    },
    {
        "name": "D Fend Immunity Booster Orange Flavour Sugar Free 2 Pack Of 10 Effervescent Tablets",
        "link": "https://www.truemeds.in/otc/d-fend-immunity-booster-orange-flavour-sugar-free-tablet-10-pack-of-2-tm-tasf1-000004"
    },
    {
        "name": "D Fend Immunity Booster Orange Flavour Sugar Free Effervescent Tablet 20",
        "link": "https://www.truemeds.in/otc/d-fend-immunity-booster-20-tm-taer1-001118"
    },
    {
        "name": "D Fibroheal Ag Sprinkling Powder 10gm",
        "link": "https://www.truemeds.in/otc/d-fibroheal-ag-sprinkling-powder-10gm-tm-poer1-004199"
    },
    {
        "name": "D Fine Orange Flavour Sugar Free Sachet 1gm",
        "link": "https://www.truemeds.in/otc/d-fine-60000-iu-granules-1-tm-gres1-000034"
    },
    {
        "name": "D First Drops 15 ML",
        "link": "https://www.truemeds.in/medicine/d-first-drops-15-ml-tm-dohe1-001198"
    },
    {
        "name": "D First Nano Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/d-first-nano-drops-5-ml-tm-dohe1-001199"
    },
    {
        "name": "D Flake 1.5 MCG Gel 20 GM",
        "link": "https://www.truemeds.in/medicine/d-flake-15-mcg-gel-20-gm-tm-geel1-000314"
    },
    {
        "name": "D Flame Capsule 10",
        "link": "https://www.truemeds.in/medicine/d-flame-capsule-10-tm-cacr1-010532"
    },
    {
        "name": "D Flaxene Er 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-flaxene-er-50-mg-tablet-10-tm-taet1-001505"
    },
    {
        "name": "D Flaz 6 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-flaz-6-mg-tablet-10-tm-tacr1-010148"
    },
    {
        "name": "D Flour Tablet 10",
        "link": "https://www.truemeds.in/otc/d-flour-20-mg-tablet-10-tm-tacr1-010149"
    },
    {
        "name": "D Flu Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-flu-tablet-10-TM-TACR1-046786"
    },
    {
        "name": "D Frag Veg Tablet 10",
        "link": "https://www.truemeds.in/otc/dfrag-veg-tablet-10-tm-tacr1-105869"
    },
    {
        "name": "D Fresh Forte Gel 30gm",
        "link": "https://www.truemeds.in/medicine/d-fresh-forte-gel-30-gm-tm-geel1-001976"
    },
    {
        "name": "D Fresh Gel 10 GM",
        "link": "https://www.truemeds.in/otc/d-fresh-gel-10-gm-tm-geel1-002735"
    },
    {
        "name": "E Vit Oil 60 ML",
        "link": "https://www.truemeds.in/otc/e-vit-oil-60-ml-tm-oiil1-000866"
    },
    {
        "name": "E Vit Skin Lotion 60 ML",
        "link": "https://www.truemeds.in/medicine/e-vit-skin-lotion-60-ml-tm-loes1-000840"
    },
    {
        "name": "E Vitamin 200 Capsule 10",
        "link": "https://www.truemeds.in/otc/e-vitamin-200-mg-capsule-10-tm-cacr1-014195"
    },
    {
        "name": "E Vitamin 400 Capsule 10",
        "link": "https://www.truemeds.in/medicine/e-vitamin-400-mg-capsule-10-TM-CACR1-009847"
    },
    {
        "name": "E Vivax 40 MG Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/e-vivax-40-mg-injection-5-ml-tm-inon2-014704"
    },
    {
        "name": "E Warm 200 MG Oral Suspension 10 ML",
        "link": "https://www.truemeds.in/medicine/e-warm-200-mg-oral-suspension-10-ml-tm-orps1-001264"
    },
    {
        "name": "E Wok Capsule 10",
        "link": "https://www.truemeds.in/medicine/ewok-capsule-10-tm-cacr1-008849"
    },
    {
        "name": "E Wok Lc Tablet 10",
        "link": "https://www.truemeds.in/medicine/e-wok-lc-tablet-10-tm-tacr1-082380"
    },
    {
        "name": "E Worm 400 MG Tablet 1",
        "link": "https://www.truemeds.in/medicine/e-worm-400-mg-tablet-1-tm-tacr1-069123"
    },
    {
        "name": "E Zart 500 Tablet 3",
        "link": "https://www.truemeds.in/medicine/e-zart-500-mg-tablet-3-tm-tacr1-102218"
    },
    {
        "name": "E Zeom 40 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/e-zeom-40-mg-injection-1-tm-inon2-014653"
    },
    {
        "name": "E Zinc Drops 30ml",
        "link": "https://www.truemeds.in/medicine/e-zinc-east-african-drops-30-ml-tm-dohe1-001218"
    },
    {
        "name": "E Zinc Plus Capsule 10",
        "link": "https://www.truemeds.in/medicine/e-zinc-plus-capsule-10-tm-cacr1-007104"
    },
    {
        "name": "E Zinc Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/e-zinc-digmedi-syrup-200-ml-tm-syup1-007705"
    },
    {
        "name": "E Zon 250mg Injection 1",
        "link": "https://www.truemeds.in/medicine/e-zon-250-mg-injection-1-tm-inon2-014376"
    },
    {
        "name": "E Zon 500mg Injection 1",
        "link": "https://www.truemeds.in/medicine/e-zon-500-mg-injection-1-tm-inon2-014329"
    },
    {
        "name": "G Reg 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-reg-500-mg-tablet-10-tm-tacr1-016545"
    },
    {
        "name": "G Reg 500 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/g-reg-500-mg-tablet-sr-10-tm-tasr1-000324"
    },
    {
        "name": "G Sam 400 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-sam-400-mg-tablet-10-tm-tacr1-073002"
    },
    {
        "name": "G Scab Lotion 100 ML",
        "link": "https://www.truemeds.in/medicine/g-scab-lotion-100-ml-tm-loes1-000904"
    },
    {
        "name": "G Sure 2.6 Tablet 30",
        "link": "https://www.truemeds.in/medicine/g-sure-26-tablet-30-tm-tadr1-000394"
    },
    {
        "name": "G Tase 15 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tase-15-mg-tablet-10-tm-tacr1-016546"
    },
    {
        "name": "G Tase 30 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tase-30-mg-tablet-10-tm-tacr1-016547"
    },
    {
        "name": "G Tase G 15/1 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tase-g-151-mg-tablet-10-tm-tacr1-016548"
    },
    {
        "name": "G Tase G 15/2 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tase-g-152-mg-tablet-10-tm-tacr1-016549"
    },
    {
        "name": "G Tase M 15/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tase-m-15500-mg-tablet-10-tm-tacr1-016550"
    },
    {
        "name": "G Tase M 30/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tase-m-30500-mg-tablet-10-tm-tacr1-016551"
    },
    {
        "name": "G Tek Lc Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tek-lc-tablet-10-tm-tacr1-080594"
    },
    {
        "name": "G Ten 100 MG Tablet 14",
        "link": "https://www.truemeds.in/medicine/g-ten-100-mg-tablet-14-tm-tacr1-087141"
    },
    {
        "name": "G Thro 200 MG Suspension 15 ML",
        "link": "https://www.truemeds.in/medicine/g-thro-200-mg-suspension-15-ml-tm-orps1-001481"
    },
    {
        "name": "G Thro 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-thro-250-mg-tablet-10-tm-tacr1-090673"
    },
    {
        "name": "G Tryp Drb Tablet 10",
        "link": "https://www.truemeds.in/medicine/g-tryp-drb-tablet-10-tm-tacr1-089023"
    },
    {
        "name": "I Site Forte Capsule 10",
        "link": "https://www.truemeds.in/medicine/i-site-forte-capsule-10-tm-cacr1-007456"
    },
    {
        "name": "I Site Plus New Tablet 10",
        "link": "https://www.truemeds.in/otc/new-i-site-plus-tablet-10-tm-tacr1-105128"
    },
    {
        "name": "I Soft Ophthalmic Solution 10ml",
        "link": "https://www.truemeds.in/medicine/i-soft-ophthalmic-solution-10-ml-tm-eynt2-002399"
    },
    {
        "name": "I Star 6mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/i-star-6-mg-tablet-10-tm-tacr1-018972"
    },
    {
        "name": "I Star 6mg Tablet 4",
        "link": "https://www.truemeds.in/medicine/i-star-6-mg-tablet-4-tm-tacr1-018973"
    },
    {
        "name": "I Sure Ovulation Kit 1",
        "link": "https://www.truemeds.in/otc/i-sure-ovulation-kit-1-tm-kiit1-000132"
    },
    {
        "name": "I Tax 1000 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-1000-mg-injection-1-tm-inon2-003788"
    },
    {
        "name": "I Tax 125 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-125-mg-injection-1-tm-inon2-003789"
    },
    {
        "name": "I Tax 2000 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-2000-mg-injection-1-tm-inon2-003790"
    },
    {
        "name": "I Tax 250 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-250-mg-injection-1-tm-inon2-003791"
    },
    {
        "name": "I Tax 500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-500-mg-injection-1-tm-inon2-003792"
    },
    {
        "name": "I Tax O 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/i-tax-o-200-mg-tablet-10-tm-tacr1-098941"
    },
    {
        "name": "I Tax S 1000/500mg Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-s-1000500-mg-injection-1-tm-inon2-003793"
    },
    {
        "name": "I Tax S 250/125 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-s-250125-mg-injection-2-ml-tm-inon2-003794"
    },
    {
        "name": "I Tax S 500/250 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-s-500250-mg-injection-1-tm-inon2-003795"
    },
    {
        "name": "I Tax T 1000/125 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-tax-t-1000125-mg-injection-1-tm-inon2-003796"
    },
    {
        "name": "K Pod 50 MG Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/k-pod-50-mg-dry-syrup-30-ml-tm-drup1-002495"
    },
    {
        "name": "K Ptd 30/40 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/k-ptd-3040-mg-capsule-10-tm-cacr1-013953"
    },
    {
        "name": "K Rbd 30/20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/k-rbd-3020-mg-capsule-10-tm-cacr1-014971"
    },
    {
        "name": "K Shine 2% Shampoo 100ml",
        "link": "https://www.truemeds.in/medicine/k-shine-2-shampoo-100-ml-tm-shoo1-000301"
    },
    {
        "name": "K Shine Lotion 100ml",
        "link": "https://www.truemeds.in/medicine/k-shine-lotion-100-ml-tm-loes1-001531"
    },
    {
        "name": "K Squarians Contoured Lumbar Sacral Small Grey Belt 1",
        "link": "https://www.truemeds.in/otc/k-squarians-contoured-lumbar-sacral-small-grey-belt-1-tm-heca1-003576"
    },
    {
        "name": "K Stall Powder 15.3gm",
        "link": "https://www.truemeds.in/medicine/k-stall-powder-153-gm-tm-poer1-002757"
    },
    {
        "name": "K Stall Sachet 15gm",
        "link": "https://www.truemeds.in/medicine/k-stall-powder-15-gm-tm-poer1-000175"
    },
    {
        "name": "K Stat 250 Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-stat-250-mg-tablet-10-tm-tacr1-020198"
    },
    {
        "name": "K Stat 500 Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-stat-500-mg-tablet-10-tm-tacr1-020199"
    },
    {
        "name": "K Stat Et 250/250mg Tablet 6",
        "link": "https://www.truemeds.in/medicine/k-stat-et-250250-mg-tablet-6-tm-tacr1-020201"
    },
    {
        "name": "K Stat Et Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-stat-et-250250-mg-tablet-10-tm-tacr1-020200"
    },
    {
        "name": "K Stat Injection 2ml",
        "link": "https://www.truemeds.in/medicine/k-stat-125-mg-injection-2-ml-tm-inon2-004114"
    },
    {
        "name": "K Stryn Sachet 15gm",
        "link": "https://www.truemeds.in/medicine/kstryn-15-gm-sachet-1-tm-saet1-001024"
    },
    {
        "name": "K Tears Ultra Eye Drop 10 ML",
        "link": "https://www.truemeds.in/medicine/k-tears-ultra-eye-drop-10-ml-tm-eynt2-002330"
    },
    {
        "name": "K Terbimax Tablet 10",
        "link": "https://www.truemeds.in/medicine/k-terbimax-250-mg-tablet-10-tm-tacr1-091852"
    },
    {
        "name": "Haemaccel Infusion 500ml",
        "link": "https://www.truemeds.in/medicine/haemaccel-infusion-500-ml-tm-iner1-000626"
    },
    {
        "name": "Haemaday 100 MG Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/haemaday-100-mg-injection-5-ml-tm-inon2-003594"
    },
    {
        "name": "Haemaday 100 Mg/300mcg/500mcg Tablet 10",
        "link": "https://www.truemeds.in/medicine/haemaday-100-mg300mcg500mcg-tablet-10-tm-tacr1-018394"
    },
    {
        "name": "Haemaday 30 Mg/500mcg/300 MCG Syrup 150 ML",
        "link": "https://www.truemeds.in/medicine/haemaday-30-mg500mcg300-mcg-syrup-150-ml-tm-syup1-002021"
    },
    {
        "name": "Haemaday Plus Capsule 15",
        "link": "https://www.truemeds.in/medicine/haemaday-plus-capsule-15-tm-cacr1-010350"
    },
    {
        "name": "Haemaday Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/haemaday-plus-tablet-10-tm-tacr1-054211"
    },
    {
        "name": "Haemaday Plus Tablet 15",
        "link": "https://www.truemeds.in/medicine/haemaday-plus-tablet-15-tm-tacr1-059664"
    },
    {
        "name": "Haemarange Ipc 50 MG Syrup 150 ML",
        "link": "https://www.truemeds.in/medicine/haemarange-ipc-50-mg-syrup-150-ml-tm-syup1-002022"
    },
    {
        "name": "Haematest Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/haematest-syrup-200-ml-tm-syup1-005794"
    },
    {
        "name": "Haematinga Capsule 30",
        "link": "https://www.truemeds.in/medicine/haematinga-capsule-30-tm-cacr1-007375"
    },
    {
        "name": "Haematinga Liquid 225 ML",
        "link": "https://www.truemeds.in/medicine/haematinga-liquid-225-ml-tm-lint1-000453"
    },
    {
        "name": "Haematite Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/haematite-syrup-200-ml-tm-syup1-011234"
    },
    {
        "name": "Haematite Zt Tablet 10",
        "link": "https://www.truemeds.in/otc/haematite-zt-tablet-10-tm-tacr1-080317"
    },
    {
        "name": "Haemaze Forte Capsule 10",
        "link": "https://www.truemeds.in/medicine/haemaze-forte-capsule-10-tm-cacr1-002353"
    },
    {
        "name": "Haemaze Forte Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/haemaze-forte-100015-mg-injection-5-ml-tm-inon2-003595"
    },
    {
        "name": "Haemaze Forte Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/haemaze-forte-syrup-200-ml-tm-syup1-002023"
    },
    {
        "name": "M Set L 5/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-set-l-510-mg-tablet-10-tm-tacr1-069596"
    },
    {
        "name": "M Soft Eye Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/m-soft-eye-drops-10-ml-tm-eynt2-002389"
    },
    {
        "name": "M Solvin Expectorant Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-solvin-1002530-mg-tablet-10-tm-tacr1-023075"
    },
    {
        "name": "M Solvin Lime And Orange Flavour Sugar Free Expectorant 100ml",
        "link": "https://www.truemeds.in/medicine/m-solvin-syrup-tm-syup1-002646"
    },
    {
        "name": "M Solvin Lime And Orange Flavour Sugar Free Expectorant 60ml",
        "link": "https://www.truemeds.in/medicine/m-solvin-10012530-mg-syrup-60-ml-tm-syup1-002647"
    },
    {
        "name": "M Spray 5 % Spray 10 ML",
        "link": "https://www.truemeds.in/medicine/m-spray-5-spray-10-ml-tm-sper1-000063"
    },
    {
        "name": "M Star At Tablet 10",
        "link": "https://www.truemeds.in/medicine/m-star-at-tablet-10-tm-tacr1-085447"
    },
    {
        "name": "M Strong Af Capsule 10",
        "link": "https://www.truemeds.in/medicine/m-strong-af-capsule-10-TM-CACR1-011084"
    },
    {
        "name": "M Strong Capsule 10",
        "link": "https://www.truemeds.in/otc/mstrong-capsules-10-tm-tacr1-051074"
    },
    {
        "name": "M Strong Capsule 15",
        "link": "https://www.truemeds.in/medicine/m-strong-capsule-15-tm-cacr1-013591"
    },
    {
        "name": "M Strong Cs Capsule 10",
        "link": "https://www.truemeds.in/otc/mstrong-cs-capsule-10-tm-cacr1-009005"
    },
    {
        "name": "M Strong Cs Capsule 15",
        "link": "https://www.truemeds.in/otc/m-strong-cs-capsule-15-tm-cacr1-013615"
    },
    {
        "name": "M Strong Pg Capsule 10",
        "link": "https://www.truemeds.in/medicine/m-strong-pg-capsule-10-tm-cacr1-012531"
    },
    {
        "name": "M Strong Pg Capsule 15",
        "link": "https://www.truemeds.in/medicine/mstrong-pg-75-mg750mcg-capsule-15-tm-cacr1-011555"
    },
    {
        "name": "M Sys Cream 10gm",
        "link": "https://www.truemeds.in/medicine/m-sys-cream-10-gm-tm-coom1-005203"
    },
    {
        "name": "M Sys Ointment 10gm",
        "link": "https://www.truemeds.in/medicine/m-sys-ointment-10-gm-tm-oint1-001299"
    },
    {
        "name": "Jakavi 15mg Tablet 14",
        "link": "https://www.truemeds.in/medicine/jakavi-15-mg-tablet-14-tm-tacr1-019928"
    },
    {
        "name": "Jakavi 20mg Tablet 14",
        "link": "https://www.truemeds.in/medicine/jakavi-20-mg-tablet-14-tm-tacr1-019929"
    },
    {
        "name": "Jakavi 5 Tablet 14",
        "link": "https://www.truemeds.in/medicine/jakavi-5-mg-tablet-14-tm-tacr1-019930"
    },
    {
        "name": "Jakfer 160 Mg/7.5mcg/0.5mg Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/jakfer-160-mg75mcg05mg-syrup-200-ml-tm-syup1-002208"
    },
    {
        "name": "Jakfer 160/0.5/0.5 MG Syrup 300 ML",
        "link": "https://www.truemeds.in/medicine/jakfer-1600505-mg-syrup-300-ml-tm-syup1-002209"
    },
    {
        "name": "Jakhme Ruz Ointment 20gm",
        "link": "https://www.truemeds.in/otc/jakhme-ruz-ointment-20-gm-tm-oint1-001532"
    },
    {
        "name": "Jakjoy Tablet 10",
        "link": "https://www.truemeds.in/otc/jakjoy-tablet-10-tm-tacr1-079285"
    },
    {
        "name": "Jakmac Er Tablet 10",
        "link": "https://www.truemeds.in/medicine/jakmac-er-11-mg-tablet-10-tm-taet1-001754"
    },
    {
        "name": "Jakmac Tablet 10",
        "link": "https://www.truemeds.in/medicine/jakmac-tablets-10-tm-tacr1-104634"
    },
    {
        "name": "Jaknat Tablet 10",
        "link": "https://www.truemeds.in/medicine/jaknat-5-mg-tablet-10-tm-tacr1-053576"
    },
    {
        "name": "Jakseas Tablet 10",
        "link": "https://www.truemeds.in/medicine/jakseas-5-mg-tablet-10-TM-TACR1-057764"
    },
    {
        "name": "Jakseas Xr Tablet 10",
        "link": "https://www.truemeds.in/medicine/jakseas-xr-tablet-10-tm-tacr1-082321"
    },
    {
        "name": "Jaktinib 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/jaktinib-5-tablet-10-tm-tacr1-110172"
    },
    {
        "name": "Jakura 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/jakura-5-mg-tablet-10-tm-tacr1-072203"
    },
    {
        "name": "Jakura 5 Tablet 60",
        "link": "https://www.truemeds.in/medicine/jakura-5-mg-tablet-60-tm-tacr1-072202"
    },
    {
        "name": "Jakura Xr Tablet 10",
        "link": "https://www.truemeds.in/medicine/jakura-11-mg-tablet-xr-10-tm-taet1-001063"
    },
    {
        "name": "Nacel 200 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/nacel-400-mg-injection-2-ml-tm-inon2-005404"
    },
    {
        "name": "Nacel 600 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacel-600-mg-tablet-10-tm-tacr1-025836"
    },
    {
        "name": "Naceplus Tablet 10",
        "link": "https://www.truemeds.in/medicine/naceplus-tablet-10-tm-tacr1-096043"
    },
    {
        "name": "Nacetam Injection 15 ML",
        "link": "https://www.truemeds.in/medicine/nacetam-injection-15-ml-tm-inon2-009490"
    },
    {
        "name": "Nacetam Injection 60 ML",
        "link": "https://www.truemeds.in/medicine/nacetam-injection-60-ml-tm-inon2-009491"
    },
    {
        "name": "Nacfil 1.2 Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacfil-1200-mg-tablet-10-tm-tacr1-025838"
    },
    {
        "name": "Nacfil 20 % Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/nacfil-20-injection-2-ml-tm-inon2-005405"
    },
    {
        "name": "Nacfil 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacfil-200-mg-tablet-10-tm-tacr1-025839"
    },
    {
        "name": "Nacfil 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacfil-300-mg-tablet-10-tm-tacr1-025837"
    },
    {
        "name": "Nacfil Ab 300/30 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacfil-ab-30030-mg-tablet-10-tm-tacr1-025841"
    },
    {
        "name": "Nacfil Forte Sachet 3gm",
        "link": "https://www.truemeds.in/medicine/nacfil-forte-sachet-3-gm-tm-saet1-000570"
    },
    {
        "name": "Nacfil Forte Sachet 5gm",
        "link": "https://www.truemeds.in/medicine/nacfil-forte-powder-5-gm-tm-poer1-001928"
    },
    {
        "name": "Nacfil Forte Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacfil-forte-tablet-10-tm-tacr1-051108"
    },
    {
        "name": "Nacfil Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacfil-600-mg-tablet-10-tm-tacr1-025840"
    },
    {
        "name": "Nacfizz 600 Orange Flavour Sugar Free Effervescent Tablet 20",
        "link": "https://www.truemeds.in/otc/nacfizz-600-orange-flavour-sugar-free-effervescent-tablet-20-tm-etsf1-000018"
    },
    {
        "name": "Nacflam P Tablet 10",
        "link": "https://www.truemeds.in/medicine/nacflam-p-tablet-10-tm-tacr1-101574"
    },
    {
        "name": "L Hist Mont Syrup 30ml",
        "link": "https://www.truemeds.in/medicine/l-hist-mont-4-2-5-mg-syrup-30-ml-TM-SYUP1-002360"
    },
    {
        "name": "L Hist Mont Syrup 60ml",
        "link": "https://www.truemeds.in/medicine/l-hist-mont-425-mg-syrup-60-ml-tm-syup1-010128"
    },
    {
        "name": "L Hist Mont Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-hist-mont-105-mg-tablet-10-tm-tacr1-020655"
    },
    {
        "name": "L Hist Mont Tablet 15",
        "link": "https://www.truemeds.in/medicine/l-hist-mont-105-mg-tablet-15-tm-tacr1-078381"
    },
    {
        "name": "L Hist Syrup 30ml",
        "link": "https://www.truemeds.in/medicine/l-hist-25-mg-syrup-30-ml-tm-syup1-002359"
    },
    {
        "name": "L Hist Syrup 60ml",
        "link": "https://www.truemeds.in/medicine/l-hist-25-mg-syrup-60-ml-tm-syup1-011221"
    },
    {
        "name": "L Hist Tablet 15",
        "link": "https://www.truemeds.in/medicine/l-hist-5-mg-tablet-15-TM-TACR1-056946"
    },
    {
        "name": "L Krypzin M Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-krypzin-m-5-mg-tablet-10-tm-tacr1-090969"
    },
    {
        "name": "L Lodizin 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-lodizin-5-mg-tablet-10-tm-tacr1-020658"
    },
    {
        "name": "L Med All Silicone Foley Three Way 16 Fr Catheter 1",
        "link": "https://www.truemeds.in/otc/l-med-all-silicone-foley-three-way-16-fr-catheter-1-tm-sual1-000064"
    },
    {
        "name": "L Med All Silicone Foley Two Way 16 Fr Catheter 1",
        "link": "https://www.truemeds.in/otc/l-med-all-silicone-foley-two-way-16-fr-catheter-1-tm-sual1-000034"
    },
    {
        "name": "L Mon Day Kid Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-mon-day-kid-tablet-10-tm-tacr1-091970"
    },
    {
        "name": "L Montus Ab 10/5/200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-montus-ab-105200-mg-tablet-10-tm-tacr1-020661"
    },
    {
        "name": "L Montus Abl Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-montus-abl-51075-mg-tablet-10-tm-tacr1-020662"
    },
    {
        "name": "L Montus Fx Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-montus-fx-tablet-10-tm-tacr1-020664"
    },
    {
        "name": "L Montus Kid Forte Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-montus-kid-forte-525-mg-tablet-10-tm-tacr1-020666"
    },
    {
        "name": "O3q Tablet 10",
        "link": "https://www.truemeds.in/otc/o3q-tablet-10-tm-tacr1-073166"
    },
    {
        "name": "O3q10 Capsule 10",
        "link": "https://www.truemeds.in/otc/o3q10-softgel-capsule-10-tm-cacr1-012863"
    },
    {
        "name": "Oa 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/oa-200-mg-tablet-10-tm-tacr1-027916"
    },
    {
        "name": "Oa Cap 300 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/oa-cap-300-mg-capsule-10-tm-cacr1-003897"
    },
    {
        "name": "Oa Flex Tablet 10",
        "link": "https://www.truemeds.in/medicine/oa-flex-tablet-10-tm-tacr1-078479"
    },
    {
        "name": "Oa King Tablet 10",
        "link": "https://www.truemeds.in/medicine/oa-king-tablet-10-tm-tacr1-080155"
    },
    {
        "name": "Oa M 50/100 MG Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/oa-m-50100-mg-syrup-30-ml-tm-syup1-003082"
    },
    {
        "name": "Oab F 25 Tablet 10",
        "link": "https://www.truemeds.in/medicine/oabf-25-mg-tablet-er-10-TM-TACR1-027917"
    },
    {
        "name": "Oabf 50mg Tablet Er  10",
        "link": "https://www.truemeds.in/medicine/oabf-50-mg-tablet-er-10-tm-tacr1-027918"
    },
    {
        "name": "Oaclav 625 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/oaclav-625-mg-tablet-10-tm-tacr1-096102"
    },
    {
        "name": "Oak 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/oak-200-mg-tablet-10-tm-tacr1-027919"
    },
    {
        "name": "Oaknets Hair Care Serum 60ml",
        "link": "https://www.truemeds.in/otc/oaknets-hair-care-serum-60-ml-tm-heca1-002584"
    },
    {
        "name": "Oaknets Hair Growth Solution 90ml",
        "link": "https://www.truemeds.in/medicine/oaknets-hair-growth-topical-solution-90-ml-tm-soon2-000910"
    },
    {
        "name": "Oaknets Reglan Syrup 60ml",
        "link": "https://www.truemeds.in/medicine/oaknets-reglan-5-mg-syrup-60-ml-tm-syup1-003083"
    },
    {
        "name": "Oaknets Reglan Tablet 20",
        "link": "https://www.truemeds.in/medicine/oaknets-reglan-tablet-20-tm-tacr1-048653"
    },
    {
        "name": "Oakpan 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/oakpan-40-mg-tablet-10-tm-tacr1-027921"
    },
    {
        "name": "P Ppi Injection 1",
        "link": "https://www.truemeds.in/medicine/p-ppi-40-mg-injection-10-ml-tm-inon2-006144"
    },
    {
        "name": "P Ppi L Capsule 15",
        "link": "https://www.truemeds.in/medicine/p-ppi-l-7540-mg-capsule-sr-15-tm-cacr1-004247"
    },
    {
        "name": "P Praz 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-praz-40-mg-tablet-10-tm-tacr1-092780"
    },
    {
        "name": "P Protin Powder 200 GM",
        "link": "https://www.truemeds.in/otc/p-protin-powder-200-gm-tm-poer1-001324"
    },
    {
        "name": "P Rab 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-rab-20-mg-tablet-10-tm-tacr1-048794"
    },
    {
        "name": "P Rab D Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-rab-d-tablet-10-tm-tacr1-029997"
    },
    {
        "name": "P Ranolazine 500 Sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-ranolazine-500-mg-tablet-sr-10-tm-tasr1-001287"
    },
    {
        "name": "P Rd Capsule 15",
        "link": "https://www.truemeds.in/medicine/prd-30-40-mg-capsule-pr-15-TM-CALE1-000197"
    },
    {
        "name": "P Rocin Ointment 15gm",
        "link": "https://www.truemeds.in/medicine/p-rocin-ointment-15gm-tm-oint1-001785"
    },
    {
        "name": "P Rox 150 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p-rox-150-mg-tablet-10-tm-tacr1-094694"
    },
    {
        "name": "P Rozzip Tablet 30",
        "link": "https://www.truemeds.in/medicine/p-rozzip-tablet-30-tm-tacr1-051326"
    },
    {
        "name": "P Rozzip Tablet 60",
        "link": "https://www.truemeds.in/medicine/p-rozzip-tablet-60-tm-tacr1-051327"
    },
    {
        "name": "P Scab Cream 30 GM",
        "link": "https://www.truemeds.in/medicine/p-scab-cream-30-gm-tm-coom1-001713"
    },
    {
        "name": "P Scab Lotion 100ml",
        "link": "https://www.truemeds.in/medicine/p-scab-5-lotion-100-ml-tm-loes1-000408"
    },
    {
        "name": "P Scab Lotion 40ml",
        "link": "https://www.truemeds.in/medicine/p-scab-5-lotion-40-ml-tm-loes1-000409"
    },
    {
        "name": "P Scab Lotion 60ml",
        "link": "https://www.truemeds.in/medicine/p-scab-5-lotion-60-ml-tm-loes1-000410"
    },
    {
        "name": "S Ppi L Capsule 15",
        "link": "https://www.truemeds.in/medicine/sppi-l-7540-mg-capsule-sr-15-tm-cacr1-009731"
    },
    {
        "name": "S R P 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-r-p-10-mg-tablet-10-tm-tacr1-035516"
    },
    {
        "name": "S R T 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-r-t-100-mg-tablet-10-tm-tacr1-035517"
    },
    {
        "name": "S R T 25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-r-t-25-mg-tablet-10-tm-tacr1-035518"
    },
    {
        "name": "S R T 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-r-t-50-mg-tablet-10-tm-tacr1-035519"
    },
    {
        "name": "S Rd Capsule 15",
        "link": "https://www.truemeds.in/medicine/srd-3040-mg-capsule-sr-15-tm-cale1-000200"
    },
    {
        "name": "S Rise D3 60k Soft Gelatin Capsule 4",
        "link": "https://www.truemeds.in/otc/s-rise-d3-60k-soft-gelatin-capsule-4-tm-sole1-000424"
    },
    {
        "name": "S Shield 50 Pa+++ Sunscreen Gel 60gm",
        "link": "https://www.truemeds.in/otc/s-shield-50-pa-sunscreen-gel-60gm-tm-geel1-003050"
    },
    {
        "name": "S Vocita 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-10-mg-tablet-10-tm-tacr1-035520"
    },
    {
        "name": "S Vocita 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-20-mg-tablet-10-tm-tacr1-035521"
    },
    {
        "name": "S Vocita 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-5-mg-tablet-10-tm-tacr1-035522"
    },
    {
        "name": "S Vocita 5 MG Tablet 15",
        "link": "https://www.truemeds.in/medicine/s-vocita-5-mg-tablet-15-tm-tacr1-081727"
    },
    {
        "name": "S Vocita E 0.5/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-e-0510-mg-tablet-10-tm-tacr1-035523"
    },
    {
        "name": "S Vocita H 5/0.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-h-505-mg-tablet-10-tm-tacr1-035524"
    },
    {
        "name": "S Vocita Ls 10/0.25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-ls-10025-mg-tablet-10-tm-tacr1-035525"
    },
    {
        "name": "S Vocita Plus 10/0.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/s-vocita-plus-1005-mg-tablet-10-tm-tacr1-035526"
    },
    {
        "name": "Q Rab 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-rab-20-mg-tablet-10-tm-tacr1-094441"
    },
    {
        "name": "Q Rado 400mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-rado-400-mg-tablet-10-tm-tacr1-032592"
    },
    {
        "name": "Q Rami 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-rami-5-mg-tablet-10-tm-tacr1-087053"
    },
    {
        "name": "Q Rox 150 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-rox-150-mg-tablet-10-tm-tacr1-032579"
    },
    {
        "name": "Q Ryt Tablet 10",
        "link": "https://www.truemeds.in/otc/q-ryt-tablet-10-tm-tacr1-107892"
    },
    {
        "name": "Q S 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-s-300-mg-tablet-10-tm-tacr1-093382"
    },
    {
        "name": "Q Safe Forte Tablet 10",
        "link": "https://www.truemeds.in/otc/q-safe-forte-tablet-10-tm-tacr1-103507"
    },
    {
        "name": "Q Sap Eye Ointment 5gm",
        "link": "https://www.truemeds.in/medicine/q-sap-03-ointment-5-gm-tm-oint1-000566"
    },
    {
        "name": "Q Sense Soft Gelatin Capsule 10",
        "link": "https://www.truemeds.in/medicine/q-sense-soft-gelatin-capsule-10-tm-sole1-000190"
    },
    {
        "name": "Q Sera Black Anti Sun And Anti Ageing Hair Serum 60ml",
        "link": "https://www.truemeds.in/otc/q-sera-black-anti-sun-anti-ageing-hair-serum-60-ml-tm-coom1-003864"
    },
    {
        "name": "Q Sera Hair Serum 60ml",
        "link": "https://www.truemeds.in/medicine/q-sera-hair-serum-60-ml-TM-LOES1-001133"
    },
    {
        "name": "Q Sera Leave In Conditioner 100ml",
        "link": "https://www.truemeds.in/otc/q-sera-leave-in-conditioner-100-ml-tm-shoo1-000191"
    },
    {
        "name": "Q Sera Leave In Conditioner 50ml",
        "link": "https://www.truemeds.in/medicine/q-sera-leave-in-conditioner-50-ml-tm-soon2-000718"
    },
    {
        "name": "Q Sera Revitalizing Shampoo 150ml",
        "link": "https://www.truemeds.in/otc/q-sera-revitalizing-shampoo-150-ml-tm-shoo1-000192"
    },
    {
        "name": "Q Sera Revitalizing Shampoo 75ml",
        "link": "https://www.truemeds.in/medicine/q-sera-revitalizing-shampoo-75-ml-tm-shoo1-000271"
    },
    {
        "name": "Q Shine 300 Tablet 15",
        "link": "https://www.truemeds.in/otc/q-shine-300-mg-tablet-15-tm-tacr1-052172"
    },
    {
        "name": "R Press D Capsule 10",
        "link": "https://www.truemeds.in/medicine/r-press-d-capsule-10-tm-cale1-000816"
    },
    {
        "name": "R Pril 1.25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-pril-125-mg-tablet-10-tm-tacr1-032843"
    },
    {
        "name": "R Pril 2.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-pril-25-mg-tablet-10-tm-tacr1-032844"
    },
    {
        "name": "R Pril 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-pril-5-mg-tablet-10-tm-tacr1-032845"
    },
    {
        "name": "R Pril 5 MG Tablet 20",
        "link": "https://www.truemeds.in/medicine/r-pril-5-mg-tablet-20-tm-tacr1-032846"
    },
    {
        "name": "R Pril H 2.5/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-pril-h-25125-mg-tablet-10-tm-tacr1-032842"
    },
    {
        "name": "R Pure 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-pure-10-mg-tablet-10-tm-tacr1-032847"
    },
    {
        "name": "R Pure D 10/30 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/r-pure-d-1030-mg-capsule-10-tm-cacr1-004836"
    },
    {
        "name": "R Rd Capsule 10",
        "link": "https://www.truemeds.in/medicine/rrd-3020-mg-capsule-sr-10-tm-cale1-000163"
    },
    {
        "name": "R Rd Capsule 15",
        "link": "https://www.truemeds.in/medicine/rrd-3020-mg-capsule-sr-15-tm-cale1-000199"
    },
    {
        "name": "R Setron 2 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/r-setron-2-mg-injection-2-ml-tm-inon2-014824"
    },
    {
        "name": "R Site Capsule 10",
        "link": "https://www.truemeds.in/medicine/r-site-capsule-10-TM-CACR1-009213"
    },
    {
        "name": "R Som Syrup 170 ML",
        "link": "https://www.truemeds.in/medicine/r-som-syrup-170-ml-tm-syup1-006834"
    },
    {
        "name": "R Sucro Injection 5ml",
        "link": "https://www.truemeds.in/medicine/r-sucro-100-mg-injection-1-tm-inon2-014825"
    },
    {
        "name": "R T Dom 10/10/20 MG Suspension 170 ML",
        "link": "https://www.truemeds.in/medicine/r-t-dom-101020-mg-suspension-170-ml-tm-sury1-001399"
    },
    {
        "name": "R T Dom 10/10/20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r-t-dom-101020-mg-tablet-10-tm-tacr1-032848"
    },
    {
        "name": "T Mart 40 H Tablet 15",
        "link": "https://www.truemeds.in/medicine/t-mart-h-40125-mg-tablet-15-tm-tacr1-053286"
    },
    {
        "name": "T Mart 40 Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-mart-40-mg-tablet-10-tm-tacr1-038067"
    },
    {
        "name": "T Mart Am Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-mart-am-405-mg-tablet-10-tm-tacr1-038068"
    },
    {
        "name": "T Mart R Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-mart-r-4010-mg-tablet-10-tm-tacr1-038071"
    },
    {
        "name": "T Mate 100 Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-mate-100-mg-tablet-10-tm-tacr1-038047"
    },
    {
        "name": "T Mate 25 Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-mate-25-mg-tablet-10-tm-tacr1-038048"
    },
    {
        "name": "T Mate 50 Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-mate-50-mg-tablet-10-tm-tacr1-038049"
    },
    {
        "name": "T Maz Cr 200 MG Tablet Cr 10",
        "link": "https://www.truemeds.in/medicine/t-maz-cr-200-mg-tablet-cr-10-tm-tadr1-000135"
    },
    {
        "name": "T Maz Cr 400 MG Tablet Cr 10",
        "link": "https://www.truemeds.in/medicine/t-maz-cr-400-mg-tablet-cr-10-tm-tadr1-000136"
    },
    {
        "name": "T Methyl Od Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-methyl-od-tablet-10-tm-tacr1-075262"
    },
    {
        "name": "T Methyl Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-methyl-tablet-10-tm-tacr1-075264"
    },
    {
        "name": "T Minic Actikof Rashberry Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/t-minic-actikof-rashberry-syrup-60-ml-tm-syup1-004004"
    },
    {
        "name": "T Minic Cs Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/t-minic-cs-syrup-60-ml-tm-syup1-004006"
    },
    {
        "name": "T Minic Expelkof Mixed Fruit Syrup 60ml",
        "link": "https://www.truemeds.in/medicine/t-minic-expelkof-mixed-fruit-syrup-60-ml-tm-syup1-007086"
    },
    {
        "name": "T Minic Orange Flavour Oral Drops 15ml",
        "link": "https://www.truemeds.in/medicine/t-minic-5-2-mg-drops-15-ml-TM-DOHE1-000937"
    },
    {
        "name": "T Minic Orange Flavour Syrup 60ml",
        "link": "https://www.truemeds.in/medicine/t-minic-52-mg-orange-flavour-syrup-60-ml-tm-syup1-004003"
    },
    {
        "name": "Xalatan Eye Drops 2.5ml",
        "link": "https://www.truemeds.in/medicine/xalatan-0005-eye-drops-25-ml-tm-eynt2-001364"
    },
    {
        "name": "Xalcort 6mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/xalcort-6-mg-tablet-10-tm-tacr1-100774"
    },
    {
        "name": "Xaldinac Tablet 10",
        "link": "https://www.truemeds.in/medicine/xaldinac-tablet-10-tm-tacr1-089038"
    },
    {
        "name": "Xalibo 50 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/xalibo-50-mg-injection-1-ml-tm-inon2-008605"
    },
    {
        "name": "Xaliderm Solution 50ml",
        "link": "https://www.truemeds.in/medicine/xaliderm-solution-50-ml-tm-soon2-000878"
    },
    {
        "name": "Xalipat 100 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/xalipat-100-mg-injection-1-tm-inon2-008606"
    },
    {
        "name": "Xalipat 50 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/xalipat-50-mg-injection-1-tm-inon2-008607"
    },
    {
        "name": "Xalphen Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/xalphen-syrup-100-ml-tm-syup1-012395"
    },
    {
        "name": "Xamdex 100 MCG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/xamdex-100-mcg-injection-2-ml-tm-inon2-008608"
    },
    {
        "name": "Xamfit Capsule 30",
        "link": "https://www.truemeds.in/medicine/xamfit-capsule-30-tm-cacr1-008481"
    },
    {
        "name": "Xamic 500 MG Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/xamic-500-mg-injection-5-ml-tm-inon2-008609"
    },
    {
        "name": "Xamic 500 Tablet 10",
        "link": "https://www.truemeds.in/medicine/xamic-500-mg-tablet-10-tm-tacr1-043924"
    },
    {
        "name": "Xamic Mf Tablet 10",
        "link": "https://www.truemeds.in/medicine/xamic-mf-500250-mg-tablet-10-tm-tacr1-043925"
    },
    {
        "name": "Xamifen T Tablet 10",
        "link": "https://www.truemeds.in/medicine/xamifen-t-tablet-10-tm-tacr1-093538"
    },
    {
        "name": "Xampu Kz Anti Dandruff Shampoo 100ml",
        "link": "https://www.truemeds.in/medicine/xampu-kz-anti-dandruff-2-shampoo-100-ml-tm-shoo1-000319"
    },
    {
        "name": "Xanapride 1 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xanapride-1-mg-tablet-10-tm-tacr1-084174"
    },
    {
        "name": "V Wash Plus Wipe 10",
        "link": "https://www.truemeds.in/medicine/v-wash-plus-wipe-10-tm-wipe1-000022"
    },
    {
        "name": "V Wash Therapy Liquid 100 ML",
        "link": "https://www.truemeds.in/medicine/v-wash-therapy-liquid-100-ml-tm-lint1-000282"
    },
    {
        "name": "V Wash Wipe 10",
        "link": "https://www.truemeds.in/medicine/v-wash-wipe-10-tm-wipe1-000023"
    },
    {
        "name": "V Xime 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/v-xime-200-mg-tablet-10-tm-tacr1-101254"
    },
    {
        "name": "V-bathe Wipe 10",
        "link": "https://www.truemeds.in/medicine/v-bathe-wipe-10-tm-wipe1-000024"
    },
    {
        "name": "V-bathe Wipe 30",
        "link": "https://www.truemeds.in/medicine/v-bathe-wipe-30-tm-wipe1-000025"
    },
    {
        "name": "V-parin 25000 IU Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/v-parin-25000-iu-injection-5-ml-tm-inon2-008309"
    },
    {
        "name": "V-parin 5000 IU Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/v-parin-5000-iu-injection-5-ml-tm-inon2-008310"
    },
    {
        "name": "V-penum 500/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/v-penum-500500-mg-injection-1-tm-inon2-008311"
    },
    {
        "name": "V.n.d Pead Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/vnd-pead-drops-10-ml-tm-dohe1-001464"
    },
    {
        "name": "V&m Oral Drops 15ml",
        "link": "https://www.truemeds.in/otc/v-m-drops-15-ml-tm-dohe1-001008"
    },
    {
        "name": "V&m Syrup 100ml",
        "link": "https://www.truemeds.in/medicine/vm-syrup-100-ml-tm-syup1-011100"
    },
    {
        "name": "V2 Liv Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/v2-liv-plus-tablet-10-tm-tacr1-110912"
    },
    {
        "name": "V7 Capsule 10",
        "link": "https://www.truemeds.in/medicine/v7-capsule-10-tm-cacr1-011758"
    },
    {
        "name": "Vaadi Herbals Clove Oil & Sandalwood Foot Cream 500gm",
        "link": "https://www.truemeds.in/otc/vaadi-herbals-clove-oil-sandalwood-foot-cream-500gm-tm-coom1-006569"
    },
    {
        "name": "Vaadi Herbals Luxurious Saffron Soap 75gm",
        "link": "https://www.truemeds.in/otc/vaadi-herbals-luxurious-saffron-soap-75gm-tm-soap1-001097"
    },
    {
        "name": "Yevozen Ds 100 MG Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/yevozen-ds-100-mg-dry-syrup-30-ml-tm-drup1-002669"
    },
    {
        "name": "Yew Advance Moisturing Lotion 200 ML",
        "link": "https://www.truemeds.in/otc/yew-advance-moisturing-lotion-200-ml-tm-loes1-001618"
    },
    {
        "name": "Yezole 30 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/yezole-30-mg-capsule-10-tm-cacr1-015248"
    },
    {
        "name": "Yitolinz Tablet 10",
        "link": "https://www.truemeds.in/medicine/yitolinz-600-mg-tablet-10-tm-tacr1-101597"
    },
    {
        "name": "Ylis Cleansing Face Wash 100 ML",
        "link": "https://www.truemeds.in/otc/ylis-cleansing-face-wash-100-ml-tm-fash1-000143"
    },
    {
        "name": "Ylon 4 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ylon-4-mg-tablet-10-tm-tacr1-044289"
    },
    {
        "name": "Yo Fresh Mouth Wash 100 ML",
        "link": "https://www.truemeds.in/otc/yo-fresh-mouth-wash-100-ml-tm-mosh1-000244"
    },
    {
        "name": "Yofix 100mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/yofix-100-mg-tablet-10-tm-tacr1-099884"
    },
    {
        "name": "Yofix 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/yofix-200-mg-tablet-10-tm-tacr1-100065"
    },
    {
        "name": "Yofix 50mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/yofix-50-mg-tablet-10-tm-taer1-002723"
    },
    {
        "name": "Yofix Cv Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/yofix-cv-dry-syrup-30-ml-tm-drup1-002821"
    },
    {
        "name": "Yofix O Tablet 10",
        "link": "https://www.truemeds.in/medicine/yofix-o-tablet-10-tm-tacr1-098801"
    },
    {
        "name": "Yog Ayurveda Glycerine 100ml",
        "link": "https://www.truemeds.in/otc/yog-ayurveda-glycerine-100ml-tm-lint1-003880"
    },
    {
        "name": "Yogaguru Mantr Karela Juice 500ml",
        "link": "https://www.truemeds.in/otc/yogaguru-mantr-karela-juice-500ml-tm-lint1-003740"
    },
    {
        "name": "Yogamet GM 1 Forte Tablet 15",
        "link": "https://www.truemeds.in/medicine/yogamet-gm-1-forte-tablet-15-tm-tacr1-081248"
    },
    {
        "name": "Yogamet GM 1 Tablet 10",
        "link": "https://www.truemeds.in/medicine/yogamet-gm-1500-mg-tablet-er-10-tm-taet1-000581"
    },
    {
        "name": "Walibur 600 MG Tablet 4",
        "link": "https://www.truemeds.in/medicine/walibur-600-mg-tablet-4-tm-tacr1-043633"
    },
    {
        "name": "Walimont 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/walimont-10-mg-tablet-10-tm-tacr1-089458"
    },
    {
        "name": "Walimont Fx 10/120 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/walimont-fx-10120-mg-tablet-10-tm-tacr1-089457"
    },
    {
        "name": "Walimont Lc Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/walimont-lc-syrup-60-ml-tm-syup1-011652"
    },
    {
        "name": "Walk On 750/50/250/175 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/walk-on-75050250175-mg-tablet-10-tm-tacr1-043634"
    },
    {
        "name": "Walk On Gel 30 GM",
        "link": "https://www.truemeds.in/medicine/walk-on-10-gel-30-gm-tm-geel1-001146"
    },
    {
        "name": "Walkfree 1.16 % Gel 30 GM",
        "link": "https://www.truemeds.in/medicine/walkfree-116-gel-30-gm-tm-geel1-001147"
    },
    {
        "name": "Walkfree 300 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/walkfree-akumentis-300-mg-capsule-10-tm-cacr1-006418"
    },
    {
        "name": "Walkfree 75 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/walkfree-75-mg-injection-1-ml-tm-inon2-008542"
    },
    {
        "name": "Walkfree Nanogel 30 GM",
        "link": "https://www.truemeds.in/medicine/walkfree-nanogel-30-gm-tm-nael1-000008"
    },
    {
        "name": "Walkrite 300 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/walkrite-300-mg-capsule-10-tm-cacr1-006419"
    },
    {
        "name": "Walktall Capsule 10",
        "link": "https://www.truemeds.in/otc/walktall-500-mg-capsule-10-tm-cacr1-006420"
    },
    {
        "name": "Walktall Kid Suspension 200ml",
        "link": "https://www.truemeds.in/medicine/walktall-kid-suspension-200-ml-tm-sury1-001719"
    },
    {
        "name": "Walktall Plus 500 MG Tablet 10",
        "link": "https://www.truemeds.in/otc/walktall-plus-500-mg-tablet-10-tm-tacr1-043635"
    },
    {
        "name": "Walktall Total Tablet 10",
        "link": "https://www.truemeds.in/otc/walktall-total-tablet-10-tm-tacr1-051874"
    },
    {
        "name": "Walmet 850 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/walmet-850-mg-tablet-10-tm-tacr1-076860"
    },
    {
        "name": "Ubinext Plus Sachet 5gm",
        "link": "https://www.truemeds.in/medicine/ubinext-plus-sachet-5-gm-tm-saet1-000725"
    },
    {
        "name": "Ubinext Plus Sugar Free Sachet 5gm",
        "link": "https://www.truemeds.in/otc/ubinext-plus-sugar-free-sachet-5-gm-tm-gres1-000295"
    },
    {
        "name": "Ubinova Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubinova-capsule-10-tm-cacr1-006129"
    },
    {
        "name": "Ubiphene 100 Tablet 5",
        "link": "https://www.truemeds.in/medicine/ubiphene-100100-mg-tablet-5-tm-tacr1-041688"
    },
    {
        "name": "Ubiphene 50/50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ubiphene-5050-mg-tablet-10-tm-tacr1-041690"
    },
    {
        "name": "Ubiphene C 100 Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubiphene-c-100-mg-capsule-10-tm-cacr1-014788"
    },
    {
        "name": "Ubiphene N 100mg Capsule 5",
        "link": "https://www.truemeds.in/medicine/ubiphene-n-100-mg-capsule-5-tm-cacr1-006130"
    },
    {
        "name": "Ubiphene N 25 MG Capsule 5",
        "link": "https://www.truemeds.in/medicine/ubiphene-n-25-mg-capsule-5-tm-cacr1-006131"
    },
    {
        "name": "Ubiphene N 50 MG Capsule 5",
        "link": "https://www.truemeds.in/medicine/ubiphene-n-50-mg-capsule-5-tm-cacr1-006132"
    },
    {
        "name": "Ubiphene Tablet 10",
        "link": "https://www.truemeds.in/medicine/ubiphene-2530-mg-tablet-10-tm-tacr1-041689"
    },
    {
        "name": "Ubiq 30 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubiq-30-mg-capsule-10-tm-cacr1-006134"
    },
    {
        "name": "Ubiq F Capsule 10",
        "link": "https://www.truemeds.in/otc/ubiq-f-capsule-10-tm-cacr1-009366"
    },
    {
        "name": "Ubiq Gel 25 GM",
        "link": "https://www.truemeds.in/otc/ubiq-gel-25-gm-tm-geel1-001799"
    },
    {
        "name": "Ubiq Gold Sachet 7.5gm",
        "link": "https://www.truemeds.in/medicine/ubiq-gold-sachet-75-gm-tm-saet1-000270"
    },
    {
        "name": "Ubiq Plus 30 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubiq-plus-30-mg-capsule-10-tm-cacr1-006137"
    },
    {
        "name": "Ubiqbionol Active Capsule 10",
        "link": "https://www.truemeds.in/medicine/ubiqbionol-active-capsule-10-tm-cacr1-015088"
    },
    {
        "name": "Zacin 100 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/zacin-100-mg-suspension-30-ml-tm-syup1-007396"
    },
    {
        "name": "Zacin 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacin-200-mg-tablet-10-tm-tacr1-044322"
    },
    {
        "name": "Zacin O 200/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacin-o-200500-mg-tablet-10-tm-tacr1-044323"
    },
    {
        "name": "Zacin Xf 200/200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacin-xf-200200-mg-tablet-10-tm-tacr1-044324"
    },
    {
        "name": "Zaclev M 5/10mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/zaclev-m-510-mg-tablet-10-tm-tacr1-102166"
    },
    {
        "name": "Zaclix Rc Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/zaclix-rc-syrup-30-ml-tm-syup1-007397"
    },
    {
        "name": "Zaclo G Cream 20 GM",
        "link": "https://www.truemeds.in/medicine/zaclo-g-cream-20-gm-tm-coom1-006151"
    },
    {
        "name": "Zaclofen 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zaclofen-20-mg-tablet-10-tm-taet1-001659"
    },
    {
        "name": "Zacnix Cv Tablet 6",
        "link": "https://www.truemeds.in/medicine/zacnix-cv-tablet-6-tm-tacr1-098404"
    },
    {
        "name": "Zacnix Lb 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacnix-lb-200-mg-tablet-10-tm-taer1-002635"
    },
    {
        "name": "Zacnix O Lb 200 Mg/200 Mg/60 M Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacnix-o-lb-200-mg200-mg60-m-tablet-10-tm-tacr1-100176"
    },
    {
        "name": "Zacnix O Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacnix-o-tablet-10-tm-tacr1-098805"
    },
    {
        "name": "Zacobal D3 Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacobal-d3-tablet-10-tm-tacr1-071561"
    },
    {
        "name": "Zacra A Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacra-a-tablet-10-tm-tacr1-093300"
    },
    {
        "name": "Zacra Am Tablet 10",
        "link": "https://www.truemeds.in/medicine/zacra-am-tablet-10-tm-tasr1-002680"
    },
    {
        "name": "Zacra M Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/zacra-m-syrup-60-ml-tm-syup1-011596"
    },
    {
        "name": "Earth Rhythm Ultra Defence Spf 50 Pa++++ Sunscreen 50ml",
        "link": "https://www.truemeds.in/otc/earth-rhythm-ultra-defence-spf-50-pa-sunscreen-50ml-tm-heca1-003410"
    },
    {
        "name": "Earthsome Glucosamine Sulphate Tablet 60",
        "link": "https://www.truemeds.in/otc/earthsome-glucosamine-sulphate-tablet-60-tm-tacr1-108340"
    },
    {
        "name": "Earthsome Vitamin D3 And K2 Tablet 60",
        "link": "https://www.truemeds.in/otc/earthsome-vitamin-d3-and-k2-tablet-60-tm-tacr1-108369"
    },
    {
        "name": "Earthy Sapo Eczema Cream 50gm",
        "link": "https://www.truemeds.in/otc/earthy-sapo-eczema-cream-50gm-tm-coom1-006579"
    },
    {
        "name": "Earthy Sapo Reetha Shampoo Bar 100gm",
        "link": "https://www.truemeds.in/otc/earthy-sapo-reetha-shampoo-bar-100gm-tm-soap1-001086"
    },
    {
        "name": "Earwel Ear Drops 5ml",
        "link": "https://www.truemeds.in/medicine/earwel-510025-ear-drops-5-ml-tm-eaps1-000021"
    },
    {
        "name": "Eascof Cough 50/1.25/2 MG Expectorant 100 ML",
        "link": "https://www.truemeds.in/medicine/eascof-cac-cough-501252-mg-expectorant-100-ml-tm-exnt1-000055"
    },
    {
        "name": "Eascof D Syrup 100ml",
        "link": "https://www.truemeds.in/medicine/eascof-d-syrup-100-ml-tm-syup1-005465"
    },
    {
        "name": "Eascof Expectorant 100 ML",
        "link": "https://www.truemeds.in/medicine/eascof-maneesh-expectorant-100-ml-tm-exnt1-000177"
    },
    {
        "name": "Eascof Ls Strawberry Raspberry Menthol Flavour Sugar Free Syrup 100ml",
        "link": "https://www.truemeds.in/medicine/eascof-ls-syrup-100-ml-tm-syup1-007706"
    },
    {
        "name": "Eascof Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/eascof-syrup-100-ml-tm-syup1-005467"
    },
    {
        "name": "Ease O Fast Mango Flavour Sugar Free Suspension 170ml",
        "link": "https://www.truemeds.in/medicine/ease-o-fast-mango-sugar-free-oral-suspension-170-ml-tm-orps1-000890"
    },
    {
        "name": "Ease Out 4 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ease-out-4-mg-tablet-10-tm-tacr1-093599"
    },
    {
        "name": "Ease Th Tablet 10",
        "link": "https://www.truemeds.in/medicine/ease-th-tablet-10-tm-tacr1-091173"
    },
    {
        "name": "Easecof 5/2/10 MG Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/easecof-5210-mg-syrup-100-ml-tm-syup1-010790"
    },
    {
        "name": "Easehaler Inhaler 1",
        "link": "https://www.truemeds.in/otc/easehaler-inhaler-1-tm-inon1-000268"
    },
    {
        "name": "D Lite 60k Tablet 4",
        "link": "https://www.truemeds.in/medicine/d-lite-60k-tablet-4-tm-tacr1-061555"
    },
    {
        "name": "D Liv Syrup 100 ML",
        "link": "https://www.truemeds.in/otc/d-liv-syrup-100-ml-tm-syup1-005386"
    },
    {
        "name": "D Liv Syrup 200 ML",
        "link": "https://www.truemeds.in/otc/d-liv-syrup-200-ml-tm-syup1-005387"
    },
    {
        "name": "D Live Pg Capsule 10",
        "link": "https://www.truemeds.in/medicine/d-live-pg-capsule-10-tm-cacr1-008766"
    },
    {
        "name": "D Lizer Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/d-lizer-syrup-100-ml-tm-syup1-005388"
    },
    {
        "name": "D Lorinol Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-lorinol-10-mg-tablet-10-tm-tacr1-054357"
    },
    {
        "name": "D Lorinol Tablet 15",
        "link": "https://www.truemeds.in/medicine/d-lorinol-10-mg-tablet-15-tm-tacr1-079915"
    },
    {
        "name": "D Lortab Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-lortab-tablet-10-tm-tacr1-101546"
    },
    {
        "name": "D Lozy Nano Shot New Improved Butterscotch Flavour Sugar Free 5ml Pack Of 4 Solutions",
        "link": "https://www.truemeds.in/otc/d-lozy-nano-shot-oral-solution-5-ml-tm-oron2-000144"
    },
    {
        "name": "D Luracise Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-luracise-5-mg-tablet-10-tm-tacr1-089506"
    },
    {
        "name": "D M P3 Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/d-m-p3-syrup-60-ml-tm-syup1-007658"
    },
    {
        "name": "D Manage Vanilla Flavour Sugar Free Powder 500 GM",
        "link": "https://www.truemeds.in/otc/d-manage-vanilla-flavour-sugar-free-powder-500-gm-tm-poer1-003196"
    },
    {
        "name": "D Masi Cream 15 GM",
        "link": "https://www.truemeds.in/medicine/d-masi-20025001-mg-cream-15-gm-tm-coom1-000550"
    },
    {
        "name": "D Masi Forte Cream 15 GM",
        "link": "https://www.truemeds.in/medicine/d-masi-forte-20025001-mg-cream-15-gm-tm-coom1-000551"
    },
    {
        "name": "D Mef Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-mef-tablet-10-tm-tacr1-088525"
    },
    {
        "name": "D Met 250mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/d-met-250-mg-tablet-10-tm-tacr1-075702"
    },
    {
        "name": "B Liv Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-liv-70250-mg-tablet-10-tm-tacr1-004649"
    },
    {
        "name": "B Long F Tablet 30",
        "link": "https://www.truemeds.in/medicine/b-long-f-5-100-mg-tablet-30-TM-TACR1-004650"
    },
    {
        "name": "B Long Tablet 30",
        "link": "https://www.truemeds.in/medicine/b-long-100-mg-tablet-sr-30-TM-TASR1-000104"
    },
    {
        "name": "B Loric 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-loric-100-mg-tablet-10-tm-tacr1-062694"
    },
    {
        "name": "B Lox 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-lox-500-mg-tablet-10-tm-tacr1-065257"
    },
    {
        "name": "B Marco Capsule 30",
        "link": "https://www.truemeds.in/medicine/b-marco-capsule-30-tm-cacr1-013619"
    },
    {
        "name": "B Met 25 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-met-25-mg-tablet-10-tm-tacr1-087004"
    },
    {
        "name": "B Met 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-met-50-mg-tablet-10-tm-tacr1-062833"
    },
    {
        "name": "B Mine 0.15 % Mouth Wash 200 ML",
        "link": "https://www.truemeds.in/otc/b-mine-015-mouth-wash-200-ml-tm-mosh1-000003"
    },
    {
        "name": "B Mine Mouth Wash 100 ML",
        "link": "https://www.truemeds.in/otc/b-mine-mouth-wash-100-ml-tm-mosh1-000064"
    },
    {
        "name": "B Muce Ointment 10gm",
        "link": "https://www.truemeds.in/medicine/b-muce-ointment-10gm-tm-oint1-001871"
    },
    {
        "name": "B Muce Ointment 5gm",
        "link": "https://www.truemeds.in/medicine/b-muce-2-ointment-5-gm-tm-oint1-001323"
    },
    {
        "name": "B Mycin 300 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/b-mycin-300-mg-injection-2-ml-tm-inon2-014604"
    },
    {
        "name": "B Mycin 600 MG Injection 4 ML",
        "link": "https://www.truemeds.in/medicine/b-mycin-600-mg-injection-4-ml-tm-inon2-011363"
    },
    {
        "name": "B Myo Tablet 10",
        "link": "https://www.truemeds.in/medicine/b-myo-tablet-10-tm-tacr1-082604"
    },
    {
        "name": "B N C 0.025/0.5/1 % Cream 15 GM",
        "link": "https://www.truemeds.in/medicine/b-n-comr-0025051-cream-15-gm-tm-coom1-000110"
    },
    {
        "name": "A.m.p.m. Special Mouth Wash 300 ML",
        "link": "https://www.truemeds.in/otc/ampm-special-mouth-wash-300-ml-tm-mosh1-000057"
    },
    {
        "name": "A1a 10/75 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/a1a-1075-mg-capsule-10-tm-cacr1-010685"
    },
    {
        "name": "A1b Plus Tablet 10",
        "link": "https://www.truemeds.in/medicine/a1b-plus-tablet-10-tm-tacr1-045780"
    },
    {
        "name": "A1b Tablet 10",
        "link": "https://www.truemeds.in/medicine/a1b-tablet-10-tm-tacr1-045781"
    },
    {
        "name": "A2 5/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2-510-mg-tablet-10-tm-tacr1-000057"
    },
    {
        "name": "A2 5/5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2-55-mg-tablet-10-tm-tacr1-000058"
    },
    {
        "name": "A2 Bact 1000/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/a2-bact-1000500-mg-injection-1-tm-inon2-011633"
    },
    {
        "name": "A2 Lite Skin Lightening And Brightening Cream 20 GM",
        "link": "https://www.truemeds.in/otc/a2-lite-skin-lightening-and-brightening-cream-20-gm-tm-coom1-005591"
    },
    {
        "name": "A24 250 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/a24-250-mg-tablet-6-tm-tacr1-056331"
    },
    {
        "name": "A24 500 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/a24-500-mg-tablet-5-tm-tacr1-055933"
    },
    {
        "name": "A2at 5/50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2at-550-mg-tablet-10-tm-tacr1-056371"
    },
    {
        "name": "A2b 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2b-20-mg-tablet-10-tm-tacr1-000060"
    },
    {
        "name": "A2b 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2b-40-mg-tablet-10-tm-tacr1-000061"
    },
    {
        "name": "A2b 80mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2b-80-mg-tablet-10-tm-tacr1-000062"
    },
    {
        "name": "A2b A 40/5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2b-a-405-mg-tablet-10-tm-tacr1-000063"
    },
    {
        "name": "A2b H 40/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/a2b-h-40125-mg-tablet-10-tm-tacr1-000064"
    },
    {
        "name": "Faciloc 40 Injection 0.4ml",
        "link": "https://www.truemeds.in/medicine/faciloc-40-mg-injection-04-ml-tm-inon2-002967"
    },
    {
        "name": "Faciloc 60 MG Injection 0.6 ML",
        "link": "https://www.truemeds.in/medicine/faciloc-60-mg-injection-06-ml-tm-inon2-002968"
    },
    {
        "name": "Facitab Xtz 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/facitab-xtz-100-mg-tablet-10-tm-tacr1-014787"
    },
    {
        "name": "Faco Eye Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/faco-eye-drops-5-ml-tm-eynt2-001478"
    },
    {
        "name": "Facozole 150 MG Tablet 1",
        "link": "https://www.truemeds.in/medicine/facozole-150-mg-tablet-1-tm-tacr1-092717"
    },
    {
        "name": "Factocal 250 MG Tablet 30",
        "link": "https://www.truemeds.in/medicine/factocal-250-mg-tablet-30-tm-tacr1-014788"
    },
    {
        "name": "Factocel Viii 250iu Injection 1",
        "link": "https://www.truemeds.in/medicine/factocel-viii-250-iu-injection-10-ml-tm-inon2-002970"
    },
    {
        "name": "Factocel-ix 250 IU Injection 1",
        "link": "https://www.truemeds.in/medicine/factocel-ix-250-iu-injection-1-tm-inon2-002969"
    },
    {
        "name": "Factoderm 1/0.05/0.75/2 % Cream 15 GM",
        "link": "https://www.truemeds.in/medicine/factoderm-10050752-cream-15-gm-tm-coom1-000827"
    },
    {
        "name": "Factus 40 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/factus-40-mg-tablet-sr-10-tm-tasr1-000288"
    },
    {
        "name": "Factus 80 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/factus-80-mg-tablet-sr-10-tm-tasr1-000289"
    },
    {
        "name": "Fadep 20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/fadep-20-mg-capsule-10-tm-cacr1-001843"
    },
    {
        "name": "Fadine 20 MG Tablet 14",
        "link": "https://www.truemeds.in/medicine/fadine-20-mg-tablet-14-tm-tacr1-014789"
    },
    {
        "name": "Fadine 40 MG Tablet 14",
        "link": "https://www.truemeds.in/medicine/fadine-40-mg-tablet-14-tm-tacr1-014790"
    },
    {
        "name": "Fadox Cv Tablet 6",
        "link": "https://www.truemeds.in/medicine/fadox-cv-tablet-6-tm-tacr1-092799"
    },
    {
        "name": "Fadvic 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/fadvic-40-mg-tablet-10-tm-tacr1-014791"
    },
    {
        "name": "C Hop 300mg Tablet Sr 6",
        "link": "https://www.truemeds.in/medicine/c-hop-300-mg-tablet-sr-6-tm-tasr1-000128"
    },
    {
        "name": "C Hop 300sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-hop-300-mg-tablet-sr-10-tm-tasr1-000127"
    },
    {
        "name": "C Hop 400 Capsule 10",
        "link": "https://www.truemeds.in/medicine/c-hop-400-mg-capsule-10-tm-tacr1-005958"
    },
    {
        "name": "C Hop 400sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-hop-400sr-tablet-10-tm-tasr1-003437"
    },
    {
        "name": "C Hop 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-hop-50-mg-tablet-10-tm-tacr1-005959"
    },
    {
        "name": "C Hop Aq 50 Injection 2ml",
        "link": "https://www.truemeds.in/medicine/c-hop-aq-50-mg-injection-1-ml-tm-inon2-012070"
    },
    {
        "name": "C Hop Gel 1.125gm",
        "link": "https://www.truemeds.in/medicine/c-hop-gel-1125-gm-tm-geel1-001277"
    },
    {
        "name": "C Hope 200mg Sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-hope-200mg-sr-tablet-10-tm-tacr1-110978"
    },
    {
        "name": "C Ketocare Lotion 100ml",
        "link": "https://www.truemeds.in/medicine/c-ketocare-24-lotion-100-ml-tm-loes1-001554"
    },
    {
        "name": "C Ketocare Medicated Soap 75gm",
        "link": "https://www.truemeds.in/medicine/c-ketocare-13-medicated-soap-75-gm-tm-soap1-000595"
    },
    {
        "name": "C Knot 500/25/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-knot-5002510-mg-tablet-10-tm-tacr1-070297"
    },
    {
        "name": "C Kof Syrup 4/10 MG Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/c-kof-syrup-410-mg-syrup-100-ml-tm-syup1-000805"
    },
    {
        "name": "C Kof Tablet 10",
        "link": "https://www.truemeds.in/medicine/c-kof-tablet-10-tm-tacr1-046326"
    },
    {
        "name": "C Koff Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/c-koff-syrup-100-ml-tm-syup1-000806"
    },
    {
        "name": "C Lactum 500/500mg Injection 1",
        "link": "https://www.truemeds.in/medicine/c-lactum-500500-mg-injection-1-tm-inon2-013178"
    },
    {
        "name": "C Lax 250 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/c-lax-250-mg-capsule-10-tm-cacr1-011530"
    },
    {
        "name": "Gaba 100 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/gaba-100-mg-capsule-10-tm-cacr1-012596"
    },
    {
        "name": "Gaba 300 Capsule 10",
        "link": "https://www.truemeds.in/medicine/gaba-300-mg-capsule-10-tm-cacr1-012601"
    },
    {
        "name": "Gaba 300 Tablet 10",
        "link": "https://www.truemeds.in/medicine/gaba-300-mg-tablet-10-tm-tacr1-104566"
    },
    {
        "name": "Gaba Hosit Tablet 10",
        "link": "https://www.truemeds.in/medicine/gaba-hosit-300-mg500-mcg-tablet-10-tm-tacr1-016562"
    },
    {
        "name": "Gaba Plus 100 Tablet 10",
        "link": "https://www.truemeds.in/medicine/gaba-plus-100-mg-tablet-10-tm-tacr1-050791"
    },
    {
        "name": "Gaba Plus 300 Tablet 10",
        "link": "https://www.truemeds.in/medicine/gaba-plus-300-mg-tablet-10-tm-tacr1-081399"
    },
    {
        "name": "Gaba Plus 300/0.5/100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/gaba-plus-30005100-mg-tablet-10-tm-tacr1-070850"
    },
    {
        "name": "Gababit Mn 300 Mg/1500mcg Tablet 10",
        "link": "https://www.truemeds.in/medicine/gababit-mn-300-mg1500mcg-tablet-10-tm-tacr1-016563"
    },
    {
        "name": "Gabacap 300 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/gabacap-300-mg-capsule-10-tm-cacr1-002133"
    },
    {
        "name": "Gabacent 100mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/gabacent-100-mg-tablet-10-tm-tacr1-016564"
    },
    {
        "name": "Gabacent 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/gabacent-300-mg-tablet-10-tm-tacr1-016565"
    },
    {
        "name": "Gabacent Nt 400/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/gabacent-nt-40010-mg-tablet-10-tm-tacr1-016566"
    },
    {
        "name": "Gabacent Nt Ls 100/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/gabacent-nt-ls-10010-mg-tablet-10-tm-tacr1-016567"
    },
    {
        "name": "Gabacheck 100 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/gabacheck-100-mg-capsule-10-tm-cacr1-012665"
    },
    {
        "name": "Gabacheck 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/gabacheck-100-mg-tablet-10-tm-tacr1-076526"
    },
    {
        "name": "Gabacheck 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/gabacheck-300-mg-tablet-10-tm-tacr1-076531"
    },
    {
        "name": "I-fag 100 MG Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/i-fag-100-mg-injection-5-ml-tm-inon2-003797"
    },
    {
        "name": "I-fag 30 Mg/500mcg/300 MCG Syrup 150 ML",
        "link": "https://www.truemeds.in/medicine/i-fag-30-mg500mcg300-mcg-syrup-150-ml-tm-syup1-002124"
    },
    {
        "name": "I-feel Gentle Intimate Wash 100ml",
        "link": "https://www.truemeds.in/otc/i-feel-gentle-intimate-wash-100-ml-tm-lint1-001098"
    },
    {
        "name": "I-feel Stretch Marks Oil 100ml",
        "link": "https://www.truemeds.in/otc/i-feel-stretch-marks-oil-100ml-tm-oiil1-001430"
    },
    {
        "name": "I-know Advance Rapid One Step Mid Stream Pregnancy Test Kit 1",
        "link": "https://www.truemeds.in/otc/i-know-advance-rapid-one-step-pregnancy-test-kit-1-tm-kiit1-000329"
    },
    {
        "name": "I-know Menopause Testing Test Strip 3 Kit 1",
        "link": "https://www.truemeds.in/otc/i-know-menopause-testing-test-strip-3-kit-1-tm-kiit1-000328"
    },
    {
        "name": "I-know Ovulation Strip 5 Kit 1",
        "link": "https://www.truemeds.in/otc/i-know-ovulation-strip-kit-5-tm-kiit1-000243"
    },
    {
        "name": "I-know Pregnancy Testing Kit 1",
        "link": "https://www.truemeds.in/otc/i-know-pregnancy-test-kit-1-tm-kiit1-000308"
    },
    {
        "name": "I-know Uti Testing Test Strip 3 Kit 1",
        "link": "https://www.truemeds.in/otc/i-know-uti-testing-test-strip-3-kit-1-tm-kiit1-000326"
    },
    {
        "name": "I-nem 1000/1000 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-nem-10001000-mg-injection-1-tm-inon2-003798"
    },
    {
        "name": "I-nem 250/250 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-nem-250250-mg-injection-1-tm-inon2-003799"
    },
    {
        "name": "I-nem 500/500 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/i-nem-500500-mg-injection-1-tm-inon2-003800"
    },
    {
        "name": "I-nid-p 10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/i-nid-p-10-mg-tablet-10-tm-tacr1-050856"
    },
    {
        "name": "I-nid-p 100/325 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/i-nid-p-100325-mg-tablet-10-tm-tacr1-018976"
    },
    {
        "name": "I-pill Daily Oral Contraceptive Pills 21",
        "link": "https://www.truemeds.in/otc/i-pill-daily-oral-contraceptive-pill-21-tm-lint1-001099"
    },
    {
        "name": "I-pill Emergency Contraceptive Pill 1",
        "link": "https://www.truemeds.in/otc/i-pill-tablet-1-tm-tacr1-019664"
    },
    {
        "name": "M2 Tone Em Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/m2-tone-em-syrup-200-ml-tm-syup1-006370"
    },
    {
        "name": "M2 Tone Em Tablet 30",
        "link": "https://www.truemeds.in/medicine/m2-tone-em-tablet-30-tm-tacr1-048168"
    },
    {
        "name": "M2 Tone Forte Syrup 200ml",
        "link": "https://www.truemeds.in/otc/m2-tone-forte-syrup-200-ml-tm-syup1-006371"
    },
    {
        "name": "M2 Tone Syrup 200ml",
        "link": "https://www.truemeds.in/medicine/m2-tone-syrup-200-ml-TM-SYUP1-006372"
    },
    {
        "name": "M2 Tone Syrup 450ml",
        "link": "https://www.truemeds.in/otc/m2-tone-syrup-450ml-tm-syup1-006373"
    },
    {
        "name": "M2 Tone Tablet 30",
        "link": "https://www.truemeds.in/medicine/m2-tone-tablet-30-TM-TACR1-048169"
    },
    {
        "name": "M2 Zol D Capsule 10",
        "link": "https://www.truemeds.in/medicine/m2-zol-d-capsule-10-tm-cacr1-014310"
    },
    {
        "name": "M2pan D Tablet 10",
        "link": "https://www.truemeds.in/medicine/m2pan-d-tablet-10-tm-tacr1-082842"
    },
    {
        "name": "M2rab 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/m2rab-20-mg-tablet-10-tm-tacr1-098127"
    },
    {
        "name": "Ma Dha Capsule 10",
        "link": "https://www.truemeds.in/medicine/MA-DHA-CAPSULE-10-TM-CACR1-003206"
    },
    {
        "name": "Maa Lact 100 MG Granules 150 GM",
        "link": "https://www.truemeds.in/medicine/maa-lact-100-mg-granules-150-gm-tm-gres1-000090"
    },
    {
        "name": "Maacal 250 Mg/125iu Tablet 10",
        "link": "https://www.truemeds.in/medicine/maacal-250-mg125iu-tablet-10-tm-tacr1-023089"
    },
    {
        "name": "Maacal 500 Mg/250 IU Tablet 10",
        "link": "https://www.truemeds.in/medicine/maacal-500-mg250-iu-tablet-10-tm-tacr1-023090"
    },
    {
        "name": "Maacare Mango Powder 200 GM",
        "link": "https://www.truemeds.in/otc/maacare-mango-powder-200-gm-tm-poer1-001135"
    },
    {
        "name": "Maacare Powder 200 GM",
        "link": "https://www.truemeds.in/otc/maacare-powder-200-gm-tm-poer1-001136"
    },
    {
        "name": "Maacare Whey Sachet 200 GM",
        "link": "https://www.truemeds.in/otc/maacare-whey-sachet-200-gm-tm-saet1-000552"
    },
    {
        "name": "K20 2 % Cream 30 GM",
        "link": "https://www.truemeds.in/medicine/k20-2-cream-30-gm-tm-coom1-005355"
    },
    {
        "name": "K20 2 % Soap 75 GM",
        "link": "https://www.truemeds.in/medicine/k20-2-soap-75-gm-tm-soap1-000820"
    },
    {
        "name": "K2fit Capsule 10",
        "link": "https://www.truemeds.in/otc/k2fit-capsule-10-tm-cacr1-018371"
    },
    {
        "name": "K2k Cream 50gm",
        "link": "https://www.truemeds.in/otc/k2k-cream-50-gm-tm-coom1-002971"
    },
    {
        "name": "K2son -gold Capsule 10",
        "link": "https://www.truemeds.in/otc/k2son-gold-capsule-10-tm-cacr1-013837"
    },
    {
        "name": "Kab Net Paraffin 10 Cm X 10 Cm Dressing Gauze Pack Of 20",
        "link": "https://www.truemeds.in/otc/kab-net-paraffin-10-cm-x-10-cm-dressing-gauze-pack-of-20-tm-heca1-002541"
    },
    {
        "name": "Kabanat 60 MG Injection 1.5 ML",
        "link": "https://www.truemeds.in/medicine/kabanat-60-mg-injection-15-ml-tm-inon2-004117"
    },
    {
        "name": "Kabezed Dsr 30/20 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/kabezed-dsr-3020-mg-capsule-10-tm-cale1-001200"
    },
    {
        "name": "Kabi Bite Mango Flavour Diskettes 250 GM",
        "link": "https://www.truemeds.in/otc/kabi-bite-mango-flavour-diskettes-250-gm-tm-dier1-000020"
    },
    {
        "name": "Kabi Pro Protein 100% Whey Vanilla Flavour Jar 1000gm",
        "link": "https://www.truemeds.in/otc/kabi-pro-protein-100-whey-vanilla-flavour-jar-1000gm-tm-poer1-003523"
    },
    {
        "name": "Kabi Pro Vanilla Flavour Powder 200gm",
        "link": "https://www.truemeds.in/otc/kabipro-powder-200-gm-tm-poer1-001038"
    },
    {
        "name": "Kabi Pro Vanilla Flavour Powder 400gm",
        "link": "https://www.truemeds.in/medicine/kabi-pro-vanilla-shake-400-gm-tm-poer1-002157"
    },
    {
        "name": "Kabiceftam 1.5 GM Injection 1",
        "link": "https://www.truemeds.in/medicine/kabiceftam-15-gm-injection-1-tm-inon2-015163"
    },
    {
        "name": "Kabidarba 25 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/kabidarba-25-mg-injection-1-ml-tm-inon2-004119"
    },
    {
        "name": "Kabidarba 40 Injection 0.40ml",
        "link": "https://www.truemeds.in/medicine/kabidarba-40-mg-injection-1-ml-tm-inon2-004120"
    },
    {
        "name": "Kabifungin 50 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/kabifungin-50-mg-injection-1-ml-tm-inon2-004121"
    },
    {
        "name": "Jankey M 1000 Tablet 15",
        "link": "https://www.truemeds.in/medicine/jankey-m-100050-mg-tablet-sr-10-tm-tasr1-001906"
    },
    {
        "name": "Jankey M 500 Tablet Pr 15",
        "link": "https://www.truemeds.in/medicine/jankey-m-500-mg-tablet-pr-15-tm-taet1-001356"
    },
    {
        "name": "Jankey M 500 Tablet Sr 15",
        "link": "https://www.truemeds.in/medicine/jankey-m-500-mg-tablet-sr-15-tm-tacr1-079489"
    },
    {
        "name": "Jankis Shuchi Mustard Wood Pressed Virgin Oil 1000ml",
        "link": "https://www.truemeds.in/otc/jankis-shuchi-mustard-wood-pressed-virgin-oil-1000ml-tm-oiil1-001198"
    },
    {
        "name": "Janocef 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/janocef-200-mg-tablet-10-tm-taer1-002419"
    },
    {
        "name": "Janpra D Tablet 10",
        "link": "https://www.truemeds.in/medicine/janpra-d-tablet-10-tm-tacr1-096766"
    },
    {
        "name": "Janpra P Tablet 10",
        "link": "https://www.truemeds.in/medicine/janpra-p-tablet-10-tm-tacr1-100727"
    },
    {
        "name": "Janpra Sp Tablet 10",
        "link": "https://www.truemeds.in/medicine/janpra-sp-tablet-10-tm-tacr1-096596"
    },
    {
        "name": "Janpraz Dsr Capsule 10",
        "link": "https://www.truemeds.in/medicine/janpraz-dsr-capsule-10-tm-cale1-001421"
    },
    {
        "name": "Janumap 100 Tablet 7",
        "link": "https://www.truemeds.in/medicine/janumap-100-mg-tablet-7-tm-tacr1-066041"
    },
    {
        "name": "Janumap 50 Tablet 7",
        "link": "https://www.truemeds.in/medicine/janumap-50-mg-tablet-7-tm-tacr1-066042"
    },
    {
        "name": "Janumap M 1000 Tablet 15",
        "link": "https://www.truemeds.in/medicine/janumap-m-501000-mg-tablet-15-tm-tacr1-066039"
    },
    {
        "name": "Janumap M 500 Tablet 15",
        "link": "https://www.truemeds.in/medicine/janumap-m-50500-mg-tablet-15-tm-tacr1-066040"
    },
    {
        "name": "Janumet 500mg/50mg Tablet 15",
        "link": "https://www.truemeds.in/medicine/janumet-50500-mg-tablet-15-tm-tacr1-019943"
    },
    {
        "name": "Janumet 50mg/1000mg Tablet 14",
        "link": "https://www.truemeds.in/medicine/janumet-501000-mg-tablet-14-tm-tacr1-019940"
    },
    {
        "name": "Janumet 50mg/1000mg Tablet 15",
        "link": "https://www.truemeds.in/medicine/janumet-501000-mg-tablet-15-tm-tacr1-019941"
    },
    {
        "name": "Haes Steril 6 % Infusion 500 ML",
        "link": "https://www.truemeds.in/medicine/haes-steril-6-infusion-500-ml-tm-iner1-000202"
    },
    {
        "name": "Haflaros Tablet 10",
        "link": "https://www.truemeds.in/medicine/haflaros-tablet-10-tm-tacr1-075043"
    },
    {
        "name": "Hafnor 0.45 % Injection 500 ML",
        "link": "https://www.truemeds.in/medicine/hafnor-045-injection-500-ml-tm-inon2-003596"
    },
    {
        "name": "Hafoguard Supercharged Hydration 50ml",
        "link": "https://www.truemeds.in/otc/hafoguard-supercharged-hydration-50ml-tm-coom1-006544"
    },
    {
        "name": "Hafoos Cream 100 GM",
        "link": "https://www.truemeds.in/medicine/hafoos-cream-100-gm-tm-coom1-002896"
    },
    {
        "name": "Hafoos Cream 75gm",
        "link": "https://www.truemeds.in/medicine/hafoos-cream-75-gm-tm-coom1-002898"
    },
    {
        "name": "Hahnemann Labs Jac Olivol Body Oil 100ml",
        "link": "https://www.truemeds.in/otc/hahnemann-labs-jac-olivol-body-oil-100-ml-tm-oiil1-000501"
    },
    {
        "name": "Hahnemann Labs Jac Olivol Body Oil 200 ML",
        "link": "https://www.truemeds.in/otc/hahnemann-labs-jac-olivol-body-oil-200-ml-tm-oiil1-000502"
    },
    {
        "name": "Hahnemann Labs Jac Olivol Body Oil 300 ML",
        "link": "https://www.truemeds.in/otc/hahnemann-labs-jac-olivol-body-oil-300-ml-tm-oiil1-000503"
    },
    {
        "name": "Hahnemann Labs Jac Olivol Body Oil 500 ML",
        "link": "https://www.truemeds.in/otc/hahnemann-labs-jac-olivol-body-oil-500-ml-tm-oiil1-000504"
    },
    {
        "name": "Hahnemann Labs Livertone Drop 15 ML",
        "link": "https://www.truemeds.in/otc/hahnemann-labs-livertone-drop-15-ml-tm-dohe1-002130"
    },
    {
        "name": "Hair & Care Triple Blend Aloe Vera Damage Repair Hair Oil 300ml With 100ml Free",
        "link": "https://www.truemeds.in/otc/hair-care-triple-blend-aloe-vera-damage-repair-hair-oil-300ml-with-100ml-free-tm-oiil1-001070"
    },
    {
        "name": "Hair 4 Ce F Solution 60ml",
        "link": "https://www.truemeds.in/medicine/hair-4-ce-f-solution-60ml-tm-soon2-000990"
    },
    {
        "name": "Hair 4 Ce Solution 60ml",
        "link": "https://www.truemeds.in/medicine/hair-4-ce-solution-60ml-tm-soon2-000989"
    },
    {
        "name": "Hair 4u Boost 60ml",
        "link": "https://www.truemeds.in/otc/hair-4u-boost-spray-60ml-tm-sper1-000509"
    },
    {
        "name": "Hair 4u Conditioner 100gm",
        "link": "https://www.truemeds.in/medicine/hair-4u-515-conditioner-100-gm-tm-loes1-000224"
    },
    {
        "name": "L Sure Plus New Pack Cranberry Flavour Sugar Free Sachet 7gm",
        "link": "https://www.truemeds.in/otc/l-sure-plus-new-pack-cranberry-flavour-sugar-free-sachet-7gm-tm-posf1-000202"
    },
    {
        "name": "L Sys Cream 10gm",
        "link": "https://www.truemeds.in/medicine/lsys-cream-10-gm-tm-coom1-001244"
    },
    {
        "name": "L Sys Cream 30gm",
        "link": "https://www.truemeds.in/medicine/lsys-cream-30-gm-tm-coom1-001245"
    },
    {
        "name": "L Sys Cream 50gm",
        "link": "https://www.truemeds.in/medicine/lsys-cream-50-gm-tm-coom1-001246"
    },
    {
        "name": "L Sys Lotion 30ml",
        "link": "https://www.truemeds.in/otc/lsys-lotion-30-ml-tm-loes1-001000"
    },
    {
        "name": "L Sys Lotion 60ml",
        "link": "https://www.truemeds.in/medicine/l-sys-lotion-60-ml-tm-loes1-001971"
    },
    {
        "name": "L Tam 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-tam-500-mg-tablet-10-tm-tacr1-089251"
    },
    {
        "name": "L Ther 150 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/l-ther-150-mg-injection-2-ml-tm-inon2-004292"
    },
    {
        "name": "L Ther Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/l-ther-injection-1-ml-tm-inon2-009392"
    },
    {
        "name": "L Ther Tablet 6",
        "link": "https://www.truemeds.in/medicine/l-ther-tablet-6-tm-tacr1-020673"
    },
    {
        "name": "L Thro 500mg Tablet 3",
        "link": "https://www.truemeds.in/medicine/l-thro-500-mg-tablet-3-tm-tacr1-102750"
    },
    {
        "name": "L Thyroid 100 Tablet 120",
        "link": "https://www.truemeds.in/medicine/l-thyroid-100-tablet-120-tm-tacr1-108731"
    },
    {
        "name": "L Thyroid 12.5 MCG 100 Tablet 100",
        "link": "https://www.truemeds.in/medicine/l-thyroid-125-mcg-100-tablet-100-tm-tacr1-076934"
    },
    {
        "name": "L Thyroid 50 MCG 100 Tablet 100",
        "link": "https://www.truemeds.in/medicine/l-thyroid-50-mcg-100-tablet-100-tm-tacr1-076938"
    },
    {
        "name": "L Thyroid 75 MCG 100 Tablet 100",
        "link": "https://www.truemeds.in/medicine/l-thyroid-75-mcg-100-tablet-100-tm-tacr1-076941"
    },
    {
        "name": "L Tic 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/l-tic-5-mg-tablet-10-tm-tacr1-075158"
    },
    {
        "name": "Nadformin Gv2 Tablet 10",
        "link": "https://www.truemeds.in/medicine/nadformin-gv2-mg-tablet-sr-10-tm-tasr1-002646"
    },
    {
        "name": "Nadia Cream 10gm",
        "link": "https://www.truemeds.in/medicine/nadia-cream-10gm-tm-coom1-006358"
    },
    {
        "name": "Nadibact Cream 10gm",
        "link": "https://www.truemeds.in/medicine/nadibact-1-cream-10-gm-tm-coom1-001621"
    },
    {
        "name": "Nadibact Gel 10gm",
        "link": "https://www.truemeds.in/otc/nadibact-1-gel-10-gm-tm-geel1-000736"
    },
    {
        "name": "Nadibact Plus Cream 10gm",
        "link": "https://www.truemeds.in/medicine/nadibact-plus-2101-cream-10-gm-tm-coom1-001622"
    },
    {
        "name": "Nadibact Plus Cream 7.5gm",
        "link": "https://www.truemeds.in/medicine/nadibact-plus-2101-cream-75-gm-tm-coom1-001623"
    },
    {
        "name": "Nadican 1 % Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/nadican-1-cream-10-gm-tm-coom1-006144"
    },
    {
        "name": "Nadicin C Cream 15gm",
        "link": "https://www.truemeds.in/medicine/nadicin-c-cream-15-gm-tm-coom1-005319"
    },
    {
        "name": "Nadicin Cream 10gm",
        "link": "https://www.truemeds.in/medicine/nadicin-cream-10gm-tm-coom1-006195"
    },
    {
        "name": "Nadiclin Cream 15gm",
        "link": "https://www.truemeds.in/medicine/nadiclin-cream-15gm-tm-coom1-006692"
    },
    {
        "name": "Nadicort 40 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/nadicort-40-mg-injection-1-ml-tm-inon2-015364"
    },
    {
        "name": "Nadifa Cream 10gm",
        "link": "https://www.truemeds.in/medicine/nadifa-cream-10-gm-tm-coom1-001624"
    },
    {
        "name": "Nadifa M2 Cream 7.5gm",
        "link": "https://www.truemeds.in/medicine/nadifa-m2-cream-75-gm-tm-coom1-003169"
    },
    {
        "name": "Nadikem 1 % Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/nadikem-1-cream-10-gm-tm-coom1-001626"
    },
    {
        "name": "Nadikem 20 MG Cream 20 GM",
        "link": "https://www.truemeds.in/medicine/nadikem-20-mg-cream-20-gm-tm-coom1-001627"
    },
    {
        "name": "Nadimin Cream 10gm",
        "link": "https://www.truemeds.in/medicine/nadimin-1-cream-10-gm-tm-coom1-003846"
    },
    {
        "name": "Obactin Oz 50/125 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/obactin-oz-mer-50125-mg-suspension-30-ml-tm-sury1-001125"
    },
    {
        "name": "Obafol Md Tablet 10",
        "link": "https://www.truemeds.in/medicine/obafol-md-tablet-10-tm-tacr1-075045"
    },
    {
        "name": "Obalu 1% Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/obalu-1-cream-10-gm-tm-coom1-003855"
    },
    {
        "name": "Obat Krystal Face Wash 100 ML",
        "link": "https://www.truemeds.in/otc/obat-krystal-face-wash-100-ml-tm-fash1-000534"
    },
    {
        "name": "Obat Moistcare Plus Lotion 200ml",
        "link": "https://www.truemeds.in/otc/obat-moistcare-plus-lotion-200ml-tm-loes1-002226"
    },
    {
        "name": "Obat Obton Hair Serum 60ml",
        "link": "https://www.truemeds.in/otc/obat-obton-hair-serum-60ml-tm-seum1-000087"
    },
    {
        "name": "Obax 80/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/obax-80500-mg-tablet-10-tm-tacr1-027937"
    },
    {
        "name": "Obd 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/obd-200-mg-tablet-10-tm-tacr1-091971"
    },
    {
        "name": "Obe Fine Tablet 10",
        "link": "https://www.truemeds.in/otc/obe-fine-tablet-10-tm-tacr1-080429"
    },
    {
        "name": "Obederm 0.025/1 % Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/obederm-00251-cream-10-gm-tm-coom1-001683"
    },
    {
        "name": "Obediab D3 60k Chewable Tablet 4",
        "link": "https://www.truemeds.in/otc/obediab-d3-60k-chewable-tablet-4-tm-tacr1-096473"
    },
    {
        "name": "Obefex 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/obefex-100-mg-tablet-10-tm-tacr1-027938"
    },
    {
        "name": "Obefex 200 Tablet 10",
        "link": "https://www.truemeds.in/medicine/obefex-200-mg-tablet-10-tm-tacr1-027939"
    },
    {
        "name": "Obefex 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/obefex-50-mg-tablet-10-tm-tacr1-027940"
    },
    {
        "name": "Obefex Az 200/250 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/obefex-az-200250-mg-tablet-5-tm-tacr1-027941"
    },
    {
        "name": "Obefex Az 500 Tablet 5",
        "link": "https://www.truemeds.in/medicine/obefex-az-500-mg-tablet-5-tm-tacr1-102824"
    },
    {
        "name": "Q Well Tablet 10",
        "link": "https://www.truemeds.in/otc/q-well-tablet-10-tm-tacr1-098761"
    },
    {
        "name": "Q Win Sr 100 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/q-win-sr-100-mg-tablet-sr-10-tm-tasr1-000871"
    },
    {
        "name": "Q Win Sr 50 MG Tablet Sr 10",
        "link": "https://www.truemeds.in/medicine/q-win-sr-50-mg-tablet-sr-10-tm-tasr1-000872"
    },
    {
        "name": "Q Zen Max Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-zen-max-tablet-10-tm-tacr1-070335"
    },
    {
        "name": "Q Zim Q Forte Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-zim-q-forte-tablet-10-tm-tacr1-087868"
    },
    {
        "name": "Q Zim Q Lc Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-zim-q-lc-tablet-10-tm-tacr1-080131"
    },
    {
        "name": "Q Zolid 600 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/q-zolid-600-mg-tablet-6-tm-tacr1-090102"
    },
    {
        "name": "Q-gat 400 MG Tablet 5",
        "link": "https://www.truemeds.in/medicine/q-gat-400-mg-tablet-5-tm-tacr1-032590"
    },
    {
        "name": "Q-gat Eye/ear Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/q-gat-eyeear-drops-10-ml-tm-eyps2-000042"
    },
    {
        "name": "Q-guard 60 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-guard-60-mg-tablet-10-tm-tacr1-032591"
    },
    {
        "name": "Q-tax O 100 MG Tablet Dt 10",
        "link": "https://www.truemeds.in/medicine/q-tax-o-100-mg-tablet-dt-10-tm-taer1-000844"
    },
    {
        "name": "Q-tax O 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/q-tax-o-200-mg-tablet-10-tm-tacr1-032593"
    },
    {
        "name": "Q-tax O Ds 100 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/q-tax-o-ds-100-mg-suspension-30-ml-tm-sury1-001383"
    },
    {
        "name": "Q-tax O Ds 50 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/q-tax-o-ds-50-mg-suspension-30-ml-tm-sury1-001384"
    },
    {
        "name": "Q.mont Kid 4/2.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/qmont-kid-425-mg-tablet-10-tm-tacr1-032595"
    },
    {
        "name": "Q10 Esential Capsule 10",
        "link": "https://www.truemeds.in/otc/q10-esential-capsule-10-tm-cacr1-013056"
    },
    {
        "name": "P2i L Capsule 10",
        "link": "https://www.truemeds.in/medicine/p2i-l-7540-mg-capsule-sr-10-tm-cacr1-004249"
    },
    {
        "name": "P2i Tablet 10",
        "link": "https://www.truemeds.in/medicine/p2i-40-mg-tablet-10-tm-tacr1-030009"
    },
    {
        "name": "P2i-fast 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/p2i-fast-40-mg-tablet-10-tm-tacr1-030010"
    },
    {
        "name": "P2i-plus 40/150 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/p2i-plus-40150-mg-capsule-10-tm-cacr1-004250"
    },
    {
        "name": "P3 Tablet 10",
        "link": "https://www.truemeds.in/medicine/p3-tablet-10-tm-tacr1-108799"
    },
    {
        "name": "P4 Gest 200 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/p4-gest-200-mg-capsule-sr-10-tm-cale1-000605"
    },
    {
        "name": "P40 D Tablet  10",
        "link": "https://www.truemeds.in/medicine/p-40-d-tablet-10-tm-tacr1-078539"
    },
    {
        "name": "P4tab 200 Sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/p4-sr-200-mg-tablet-10-tm-tacr1-095331"
    },
    {
        "name": "P4tab Sr 300 Tablet 10",
        "link": "https://www.truemeds.in/medicine/p4tab-sr-300-tablet-10-tm-tasr1-002668"
    },
    {
        "name": "Pa 12 Tablet 12",
        "link": "https://www.truemeds.in/medicine/pa-12-1000-mg-tablet-12-tm-tacr1-030014"
    },
    {
        "name": "Pa 125 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/pa-125-mg-suspension-60-ml-tm-sury1-001277"
    },
    {
        "name": "Pa 250 MG Suspension 60 ML",
        "link": "https://www.truemeds.in/medicine/pa-250-mg-suspension-60-ml-tm-sury1-001278"
    },
    {
        "name": "Pa 500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/pa-500-mg-tablet-10-tm-tacr1-030012"
    },
    {
        "name": "Pa 650 Ir Tablet 10",
        "link": "https://www.truemeds.in/medicine/pa-650-mg-tablet-10-tm-tacr1-030013"
    },
    {
        "name": "Pa Cold Af Syrup 60 ML",
        "link": "https://www.truemeds.in/medicine/pa-cold-af-syrup-60-ml-tm-syup1-007940"
    },
    {
        "name": "Pa Cold Cough 100/4/10 MG Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/pa-cold-cough-100410-mg-syrup-100-ml-tm-syup1-003254"
    },
    {
        "name": "R-loc Forte 300 MG Tablet 15",
        "link": "https://www.truemeds.in/medicine/r-loc-forte-300-mg-tablet-15-tm-tacr1-032864"
    },
    {
        "name": "R.b Tone Xt Drops 15 ML",
        "link": "https://www.truemeds.in/medicine/rb-tone-xt-1001-mg-drops-15-ml-tm-dohe1-000827"
    },
    {
        "name": "R.b.depot 500 MG Injection 1 ML",
        "link": "https://www.truemeds.in/medicine/rbdepot-500-mg-injection-1-ml-tm-inon2-006801"
    },
    {
        "name": "R.b.toba 80 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/rbtoba-80-mg-injection-2-ml-tm-inon2-006802"
    },
    {
        "name": "R.b.toba Eye Drops 5 ML",
        "link": "https://www.truemeds.in/medicine/rbtoba-eye-drops-5-ml-tm-eynt2-001611"
    },
    {
        "name": "R.c.a Tablet 10",
        "link": "https://www.truemeds.in/medicine/rca-tablet-10-tm-tacr1-048976"
    },
    {
        "name": "R.c.plus Capsule 10",
        "link": "https://www.truemeds.in/medicine/rcplus-capsule-6-tm-cacr1-008066"
    },
    {
        "name": "R.p Forte Capsule 6",
        "link": "https://www.truemeds.in/medicine/r-p-forte-capsule-6-TM-CACR1-008067"
    },
    {
        "name": "R.p Forte Plus Capsule 6",
        "link": "https://www.truemeds.in/otc/rp-forte-plus-capsule-6-tm-cacr1-008068"
    },
    {
        "name": "R.p.p D 30/20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/rpp-d-3020-mg-tablet-10-tm-tacr1-032866"
    },
    {
        "name": "R.p.tone Solution 200 ML",
        "link": "https://www.truemeds.in/otc/rptone-solution-200-ml-tm-soon2-000562"
    },
    {
        "name": "R10a 10/75 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/r10a-1075-mg-capsule-10-tm-cacr1-004845"
    },
    {
        "name": "R2 10 Tablet 10",
        "link": "https://www.truemeds.in/medicine/r2-10-mg-tablet-10-tm-tacr1-053264"
    },
    {
        "name": "R2 20 Tablet 10",
        "link": "https://www.truemeds.in/medicine/r2-20-mg-tablet-10-tm-tacr1-032868"
    },
    {
        "name": "R2 40 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r2-40-mg-tablet-10-tm-tacr1-032869"
    },
    {
        "name": "R2 5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/r2-5-mg-tablet-10-tm-tacr1-074762"
    },
    {
        "name": "T Sora Ointment 50 GM",
        "link": "https://www.truemeds.in/otc/t-sora-ointment-50gm-tm-oint1-001634"
    },
    {
        "name": "T Stat 1000 MG Tablet 6",
        "link": "https://www.truemeds.in/medicine/t-stat-1000-mg-tablet-6-tm-tacr1-038058"
    },
    {
        "name": "T Stat 1gm Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-stat-1000-mg-tablet-10-tm-tacr1-038057"
    },
    {
        "name": "T Stat 500 MG Injection 5 ML",
        "link": "https://www.truemeds.in/medicine/t-stat-500-mg-injection-5-ml-tm-inon2-007579"
    },
    {
        "name": "T Stat 500 Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-stat-500-mg-tablet-10-tm-tacr1-038059"
    },
    {
        "name": "T Stat Mf Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-stat-mf-500250-mg-tablet-10-tm-tacr1-038060"
    },
    {
        "name": "T Top Forte Ointment 10gm",
        "link": "https://www.truemeds.in/medicine/t-top-forte-01-ointment-10-gm-tm-oint1-000661"
    },
    {
        "name": "T Top Ointment 10gm",
        "link": "https://www.truemeds.in/medicine/t-top-003-ointment-10-gm-tm-oint1-000660"
    },
    {
        "name": "T Val Cr 200 MG Tablet Cr 10",
        "link": "https://www.truemeds.in/medicine/t-val-cr-200-mg-tablet-cr-10-tm-tadr1-000195"
    },
    {
        "name": "T Val Cr 200/87 MG Tablet Cr 10",
        "link": "https://www.truemeds.in/medicine/t-val-cr-20087-mg-tablet-cr-10-tm-tadr1-000138"
    },
    {
        "name": "T Val Cr 333/145 MG Tablet Cr 10",
        "link": "https://www.truemeds.in/medicine/t-val-cr-333145-mg-tablet-cr-10-tm-tadr1-000139"
    },
    {
        "name": "T Vital Capsule 10 X 3",
        "link": "https://www.truemeds.in/medicine/t-vital-capsule-10-x-3-tm-cacr1-008314"
    },
    {
        "name": "T Vobit 0.2/500/1mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-vobit-025001-mg-tablet-10-tm-tacr1-038061"
    },
    {
        "name": "T Vobit 0.2/500/2mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/t-vobit-025002-mg-tablet-10-tm-tacr1-038063"
    },
    {
        "name": "T Vobit 1 Tablet 15",
        "link": "https://www.truemeds.in/medicine/t-vobit-025001-mg-tablet-sr-15-tm-tacr1-038062"
    },
    {
        "name": "T Vobit 2 Tablet 15",
        "link": "https://www.truemeds.in/medicine/t-vobit-025002-mg-tablet-sr-15-tm-tacr1-038064"
    },
    {
        "name": "Sabates Sex On Massage Oil 15ml",
        "link": "https://www.truemeds.in/otc/sabates-sex-on-massage-oil-15ml-tm-oiil1-001207"
    },
    {
        "name": "Sabates Sex Timing Increase 500mg Veg Capsule 10",
        "link": "https://www.truemeds.in/otc/sabates-sex-timing-increase-500mg-veg-capsule-10-tm-cacr1-017710"
    },
    {
        "name": "Sabates Sex Trigged Capsule 10",
        "link": "https://www.truemeds.in/otc/sabates-sex-trigged-capsule-10-tm-cacr1-017744"
    },
    {
        "name": "Sabates Sexual Wellness Capsule 15",
        "link": "https://www.truemeds.in/otc/sabates-sexual-wellness-capsule-15-tm-cacr1-017297"
    },
    {
        "name": "Sabates Weight Loss Capsule 30",
        "link": "https://www.truemeds.in/otc/sabates-weight-loss-capsule-30-tm-cacr1-017822"
    },
    {
        "name": "Sabclav 500/125 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/sabclav-500125-mg-tablet-10-tm-tacr1-035546"
    },
    {
        "name": "Sabclev Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/sabclev-dry-syrup-30-ml-tm-drup1-000887"
    },
    {
        "name": "Sabcort 6mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/sabcort-6-mg-tablet-10-tm-tacr1-100143"
    },
    {
        "name": "Sabcumin Tablet 10",
        "link": "https://www.truemeds.in/otc/sabcumin-tablet-10-tm-tacr1-107007"
    },
    {
        "name": "Sabez Dsr Capsule 10",
        "link": "https://www.truemeds.in/medicine/sabez-dsr-capsule-10-tm-cale1-000998"
    },
    {
        "name": "Sabi Expectorant 100 ML",
        "link": "https://www.truemeds.in/medicine/sabi-expectorant-100-ml-tm-exnt1-000216"
    },
    {
        "name": "Sabi Expectorant 60 ML",
        "link": "https://www.truemeds.in/medicine/sabi-expectorant-60-ml-tm-exnt1-000217"
    },
    {
        "name": "Sabi Glow Cream 15 GM",
        "link": "https://www.truemeds.in/otc/sabi-glow-cream-15-gm-tm-coom1-003326"
    },
    {
        "name": "Sabi Glow Cream 30 GM",
        "link": "https://www.truemeds.in/otc/sabi-glow-cream-30-gm-tm-coom1-003327"
    },
    {
        "name": "Sabi Glow ML Cream 30gm",
        "link": "https://www.truemeds.in/medicine/sabi-glow-ml-cream-30-gm-tm-coom1-003328"
    },
    {
        "name": "Sablomin Tablet 10",
        "link": "https://www.truemeds.in/otc/sablomin-tablet-10-tm-tacr1-083215"
    },
    {
        "name": "Vageston 100 MG Capsule 50",
        "link": "https://www.truemeds.in/medicine/vageston-100-mg-capsule-50-tm-cacr1-006249"
    },
    {
        "name": "Vageston 200 Capsule 10",
        "link": "https://www.truemeds.in/medicine/vageston-200-mg-capsule-10-tm-cacr1-006250"
    },
    {
        "name": "Vageston 200 MG Capsule 30",
        "link": "https://www.truemeds.in/medicine/vageston-200-mg-capsule-30-tm-cacr1-006251"
    },
    {
        "name": "Vageston 200 MG Capsule 6",
        "link": "https://www.truemeds.in/medicine/vageston-200-mg-capsule-6-tm-cacr1-006252"
    },
    {
        "name": "Vageston 200 MG Injection 4 ML",
        "link": "https://www.truemeds.in/medicine/vageston-200-mg-injection-4-ml-tm-inon2-008313"
    },
    {
        "name": "Vageston 300 MG Capsule 10",
        "link": "https://www.truemeds.in/medicine/vageston-300-mg-capsule-10-tm-cacr1-006253"
    },
    {
        "name": "Vageston Im 100mg Injection 1ml",
        "link": "https://www.truemeds.in/medicine/vageston-100-mg-injection-1-ml-tm-inon2-008312"
    },
    {
        "name": "Vageston Im 200 MG Injection 2 ML",
        "link": "https://www.truemeds.in/medicine/vageston-im-200-mg-injection-2-ml-tm-inon2-008314"
    },
    {
        "name": "Vagi 200/500 MG Kit 4",
        "link": "https://www.truemeds.in/medicine/vagi-200500-mg-kit-4-tm-kiit1-000181"
    },
    {
        "name": "Vagi 500 Mg/200mg/150m Tablet 4",
        "link": "https://www.truemeds.in/medicine/vagirek-500-mg200mg150m-tablet-4-tm-tacr1-042188"
    },
    {
        "name": "Vagi Cl Vaginal Tablet 7",
        "link": "https://www.truemeds.in/medicine/vagi-cl-tablet-7-tm-tacr1-042187"
    },
    {
        "name": "Vagi Cream 5 GM",
        "link": "https://www.truemeds.in/medicine/vagirek-cream-5-gm-tm-coom1-003519"
    },
    {
        "name": "Vagibact 100/100 MG Softgel 7",
        "link": "https://www.truemeds.in/medicine/vagibact-100100-mg-softgel-7-tm-soes1-000066"
    },
    {
        "name": "Vagibath Liquid 100 ML",
        "link": "https://www.truemeds.in/medicine/vagibath-liquid-100-ml-tm-lint1-000683"
    },
    {
        "name": "Vagibath Wash 250 ML",
        "link": "https://www.truemeds.in/otc/vagibath-wash-250-ml-tm-vash1-000013"
    },
    {
        "name": "Vagicalm Vaginal Tablet 6",
        "link": "https://www.truemeds.in/medicine/vagicalm-vaginal-tablet-6-tm-tacr1-049725"
    },
    {
        "name": "Ucdex 50/1.25/4 MG Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/ucdex-501254-mg-syrup-100-ml-tm-syup1-004260"
    },
    {
        "name": "Uceclin  0.1 % Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/uceclin-01-cream-10-gm-tm-coom1-005876"
    },
    {
        "name": "Ucecort 0.1 % Cream 10 GM",
        "link": "https://www.truemeds.in/medicine/ucecort-01-cream-10-gm-tm-coom1-005875"
    },
    {
        "name": "Ucefbin 250mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucefbin-250mg-tablet-10-tm-tacr1-110611"
    },
    {
        "name": "Ucefuro 250 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucefuro-250-mg-tablet-10-tm-tacr1-096800"
    },
    {
        "name": "Uceprol 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/uceprol-200-mg-tablet-10-tm-tacr1-041695"
    },
    {
        "name": "Uchamp Sr Tablet 10",
        "link": "https://www.truemeds.in/medicine/uchamp-sr-tablet-10-tm-tacr1-049674"
    },
    {
        "name": "Ucifix 100 Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucifix-100-mg-tablet-10-tm-taer1-002697"
    },
    {
        "name": "Ucifix Lb 200 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucifix-lb-200-mg-tablet-10-tm-tacr1-093606"
    },
    {
        "name": "Uciro 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/uciro-300-mg-tablet-10-tm-tacr1-041697"
    },
    {
        "name": "Ucitrol Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/ucitrol-syrup-100-ml-tm-syup1-007238"
    },
    {
        "name": "Ucix 100 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucix-100-mg-tablet-10-tm-taer1-002668"
    },
    {
        "name": "Ucix 200mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucix-200-mg-tablet-10-tm-tacr1-101628"
    },
    {
        "name": "Ucix 50 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/ucix-50-mg-tablet-10-tm-tacr1-097639"
    },
    {
        "name": "Uclick 300mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/uclick-300-mg-tablet-10-tm-tacr1-087459"
    },
    {
        "name": "Ucmove Capsule 10",
        "link": "https://www.truemeds.in/otc/ucmove-capsule-10-tm-cacr1-009367"
    },
    {
        "name": "Wancorte 6 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/wancorte-6-mg-tablet-10-tm-tacr1-093850"
    },
    {
        "name": "Wancuf D Sugar Free Syrup 100ml",
        "link": "https://www.truemeds.in/medicine/wancuf-d-syrup-100-ml-tm-syup1-012332"
    },
    {
        "name": "Wandiz Lc Tablet 10",
        "link": "https://www.truemeds.in/medicine/wandiz-lc-tablet-10-tm-tacr1-089788"
    },
    {
        "name": "Wane 1000 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/wane-1000-mg-injection-1-tm-inon2-008543"
    },
    {
        "name": "Wanesmo D Capsule 10",
        "link": "https://www.truemeds.in/medicine/wanesmo-d-capsule-10-tm-cacr1-013315"
    },
    {
        "name": "Wanish Body Serum 100ml",
        "link": "https://www.truemeds.in/otc/wanish-body-serum-100-ml-tm-lint1-001435"
    },
    {
        "name": "Wanish Cream 100 GM",
        "link": "https://www.truemeds.in/otc/wanish-cream-100-gm-tm-coom1-003536"
    },
    {
        "name": "Wanish Cream 25gm",
        "link": "https://www.truemeds.in/medicine/wanish-cream-25-gm-TM-COOM1-003537"
    },
    {
        "name": "Wanish Cream 50gm",
        "link": "https://www.truemeds.in/otc/wanish-cream-50-gm-tm-coom1-003538"
    },
    {
        "name": "Wanish Lotion 50 ML",
        "link": "https://www.truemeds.in/otc/wanish-lotion-50-ml-tm-loes1-001342"
    },
    {
        "name": "Wanish Skin Lotion 100ml",
        "link": "https://www.truemeds.in/otc/wanish-lotion-100-ml-tm-loes1-001341"
    },
    {
        "name": "Wanita 1/0.05/0.75/2 % Cream 15 GM",
        "link": "https://www.truemeds.in/medicine/wanita-10050752-cream-15-gm-tm-coom1-002267"
    },
    {
        "name": "Wanixim 100 MG Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/wanixim-100-mg-dry-syrup-30-ml-tm-drup1-002668"
    },
    {
        "name": "Wanixim 50mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/wanixim-50-mg-tablet-10-tm-taer1-002722"
    },
    {
        "name": "Wanixim Cv 200/125mg Tablet 6",
        "link": "https://www.truemeds.in/medicine/wanixim-cv-200125-mg-tablet-6-tm-tacr1-098865"
    },
    {
        "name": "Wanixim Cv Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/wanixim-cv-dry-syrup-30-ml-tm-drup1-002833"
    },
    {
        "name": "Xanurix 80 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xanurix-80-mg-tablet-10-tm-tacr1-043937"
    },
    {
        "name": "Xany D 50/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xany-d-5010-mg-tablet-10-tm-tacr1-049889"
    },
    {
        "name": "Xany Gel 30gm",
        "link": "https://www.truemeds.in/medicine/xany-gel-30-gm-tm-geel1-001846"
    },
    {
        "name": "Xany P 100/325 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xany-p-100325-mg-tablet-10-tm-tacr1-043938"
    },
    {
        "name": "Xany Sp 50/500/10 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xany-sp-5050010-mg-tablet-10-tm-tacr1-043939"
    },
    {
        "name": "Xapilis 2.5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/xapilis-25-mg-tablet-10-tm-tacr1-094214"
    },
    {
        "name": "Xapilis 2.5 Tablet 14",
        "link": "https://www.truemeds.in/medicine/xapilis-25-mg-tablet-14-tm-tacr1-074293"
    },
    {
        "name": "Xapilis 5 Tablet 10",
        "link": "https://www.truemeds.in/medicine/xapilis-5-mg-tablet-10-tm-tacr1-074884"
    },
    {
        "name": "Xapilis 5 Tablet 14",
        "link": "https://www.truemeds.in/medicine/xapilis-5-tablet-14-tm-tacr1-078307"
    },
    {
        "name": "Xarb 150 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xarb-150-mg-tablet-10-tm-tacr1-043940"
    },
    {
        "name": "Xarb 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xarb-300-mg-tablet-10-tm-tacr1-043941"
    },
    {
        "name": "Xarb H 150/12.5 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/xarb-h-150125-mg-tablet-10-tm-tacr1-043942"
    },
    {
        "name": "Xarelto 10mg Tablet 7",
        "link": "https://www.truemeds.in/medicine/xarelto-10-mg-tablet-7-tm-tacr1-043944"
    },
    {
        "name": "Xarelto 15mg Tablet 28",
        "link": "https://www.truemeds.in/medicine/xarelto-15-mg-tablet-28-tm-tacr1-043945"
    },
    {
        "name": "Xarelto 2.5mg Tablet 14",
        "link": "https://www.truemeds.in/medicine/xarelto-25-mg-tablet-14-tm-tacr1-053190"
    },
    {
        "name": "Xarelto 20mg Tablet 14",
        "link": "https://www.truemeds.in/medicine/xarelto-20mg-tablet-14-tm-tacr1-052092"
    },
    {
        "name": "Yogut Capsule 10",
        "link": "https://www.truemeds.in/medicine/yogut-100-mg-capsule-10-tm-cacr1-006474"
    },
    {
        "name": "Yogveda C Neer Sugar Free Syrup 200ml",
        "link": "https://www.truemeds.in/otc/yogveda-c-neer-sugar-free-syrup-200ml-tm-syup1-013144"
    },
    {
        "name": "Yogveda Crystal Cure Vegetarian Capsule 60",
        "link": "https://www.truemeds.in/otc/yogveda-crystal-cure-vegetarian-capsule-60-tm-cacr1-018068"
    },
    {
        "name": "Yogveda Pittappai Sugar Free Syrup 200ml",
        "link": "https://www.truemeds.in/otc/yogveda-pittappai-sugar-free-syrup-200ml-tm-sysf1-000044"
    },
    {
        "name": "Yogveda Rouhi Sugar Free Syrup 200ml",
        "link": "https://www.truemeds.in/otc/yogveda-rouhi-sugar-free-syrup-200ml-tm-sysf1-000125"
    },
    {
        "name": "Yom D Capsule 15",
        "link": "https://www.truemeds.in/medicine/yom-d-capsule-15-tm-cacr1-015511"
    },
    {
        "name": "Yomiyel 4mg Tablet 10",
        "link": "https://www.truemeds.in/medicine/yomiyel-4-mg-tablet-10-tm-tacr1-100600"
    },
    {
        "name": "Yondelis 1 MG Injection 1",
        "link": "https://www.truemeds.in/medicine/yondelis-1-mg-injection-1-tm-inon2-008706"
    },
    {
        "name": "Yonril D Syrup 100 ML",
        "link": "https://www.truemeds.in/medicine/yonril-d-syrup-100-ml-tm-syup1-012060"
    },
    {
        "name": "Yoodh 200/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/yoodh-200500-mg-tablet-10-tm-tacr1-044294"
    },
    {
        "name": "Yopon Syrup 200 ML",
        "link": "https://www.truemeds.in/medicine/yopon-syrup-200-ml-tm-syup1-008202"
    },
    {
        "name": "Yorab 20 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/yorab-20-mg-tablet-10-tm-tacr1-093679"
    },
    {
        "name": "Yordom Dsr Capsule 10",
        "link": "https://www.truemeds.in/medicine/yordom-dsr-capsule-10-tm-cale1-001549"
    },
    {
        "name": "Yormet V 2/0.2/500 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/yormet-v-202500-mg-tablet-10-tm-tacr1-074230"
    },
    {
        "name": "Yoronox P Tablet 10",
        "link": "https://www.truemeds.in/medicine/yoronox-p-tablet-10-tm-tacr1-093537"
    },
    {
        "name": "Yorul 300 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/yorul-300-mg-tablet-10-tm-tacr1-093590"
    },
    {
        "name": "Zadro Cv 250/62.5 MG Dry Syrup 30 ML",
        "link": "https://www.truemeds.in/medicine/zadro-cv-250625-mg-dry-syrup-30-ml-tm-drup1-000796"
    },
    {
        "name": "Zadro Cv 250/62.5 MG Tablet Dt 10",
        "link": "https://www.truemeds.in/medicine/zadro-cv-250625-mg-tablet-dt-10-tm-taer1-001013"
    },
    {
        "name": "Zadro Cv 500/125 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zadro-cv-500125-mg-tablet-10-tm-tacr1-044338"
    },
    {
        "name": "Zadro Readymix 100 MG Drops 10 ML",
        "link": "https://www.truemeds.in/medicine/zadro-readymix-100-mg-drops-10-ml-tm-dohe1-001067"
    },
    {
        "name": "Zadro Readymix 125 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/zadro-readymix-125-mg-suspension-30-ml-tm-sury1-001758"
    },
    {
        "name": "Zadro Readymix 250 MG Suspension 30 ML",
        "link": "https://www.truemeds.in/medicine/zadro-readymix-250-mg-suspension-30-ml-tm-sury1-001759"
    },
    {
        "name": "Zaduclav 375 Tablet 6",
        "link": "https://www.truemeds.in/medicine/zaduclav-375-mg-tablet-6-tm-tacr1-098942"
    },
    {
        "name": "Zaduclav 625 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zaduclav-625-mg-tablet-10-tm-tacr1-091211"
    },
    {
        "name": "Zadumol 650 MG Tablet 10",
        "link": "https://www.truemeds.in/medicine/zadumol-650-mg-tablet-10-tm-tacr1-090184"
    },
    {
        "name": "Zadumox 500 Capsule 10",
        "link": "https://www.truemeds.in/medicine/zadumox-500-mg-capsule-10-tm-cacr1-016128"
    },
    {
        "name": "Zady 100 Tablet 3",
        "link": "https://www.truemeds.in/medicine/zady-100-mg-tablet-3-tm-tacr1-044339"
    },
    {
        "name": "Zady 200 Readymix Suspension 30ml",
        "link": "https://www.truemeds.in/medicine/zady-readymix-200-mg-suspension-30-ml-TM-SYUP1-004547"
    },
    {
        "name": "Zady 250 Tablet 10",
        "link": "https://www.truemeds.in/medicine/zady-250-mg-tablet-10-tm-tacr1-044340"
    },
    {
        "name": "Zady 500 Tablet 5",
        "link": "https://www.truemeds.in/medicine/zady-500-mg-tablet-5-tm-tacr1-044342"
    },
    {
        "name": "Zady 500mg Tablet 3",
        "link": "https://www.truemeds.in/medicine/zady-500-mg-tablet-3-tm-tacr1-044341"
    },
    {
        "name": "Zady Readymix Suspension 15ml",
        "link": "https://www.truemeds.in/medicine/zady-readymix-100-mg-suspension-15-ml-tm-sury1-001760"
    }

]

async function init() {
  try {
    await mongoose.connect('mongodb+srv://quickcurehealth:quickcurehealth@cluster0.iqv2slt.mongodb.net/?appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
init();
Drug.insertMany(drugData)
.then(() => {
    console.log("Data inserted successfully");
}).catch((error) => {
    console.error("Error inserting data:", error);
});