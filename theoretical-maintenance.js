const age = 34;
const height = 180;
const bw = 100;
const bf = {
    low: 16,
    high: 20,
};

const bmr = 10 * bw + 6.25 * height - 5 * age + 5;
const roughBmr = bw * 2.2 * 10;

const proteinReq = {
    lean: 1.6,
    mod: 1.4,
    fat: 1.2,
};

const modActiveKcal = { low: bmr * 1.8, high: bmr * 2 };

console.clear();

const raw = {
    bmr,
    roughBmr: Number.parseFloat(roughBmr.toFixed(2)),
    modActiveKcal,

    macros: {
        protein: bw * 2.2 * proteinReq.mod,
        carbs: {
            low: Math.round(
                Number.parseFloat(((modActiveKcal.high * 0.2) / 4).toFixed())
            ),
            high: Math.round(
                Number.parseFloat(((modActiveKcal.high * 0.35) / 4).toFixed())
            ),
        },
        fat: {
            low: Math.round(
                Number.parseFloat(((modActiveKcal.high * 0.2) / 9).toFixed())
            ),
            high: Math.round(
                Number.parseFloat(((modActiveKcal.high * 0.35) / 9).toFixed())
            ),
        },
    },
};

const pKcal = raw.macros.protein * 4;
const fKcal = raw.macros.fat.low * 9;
const rKcal = raw.modActiveKcal.high - pKcal - fKcal;
const cGram = rKcal / 4;

console.log(raw);

const store = {
    kcal: raw.modActiveKcal.high,
    pro: raw.macros.protein,
    fat: raw.macros.fat.low,
    carbs: cGram,
};

const modifyIntake = (multiplier) => {
    return (() => {
        return Object.entries(store).map(([k, v]) => {
            return {
                [k]: v * multiplier,
            };
        });
    })();
};

const surplus25 = modifyIntake(1.3);
const surplus20 = modifyIntake(1.2);
const surplus10 = modifyIntake(1.1);
const maintenance = modifyIntake(1);
const deficit10 = modifyIntake(0.9);
const deficit20 = modifyIntake(0.8);
const deficit25 = modifyIntake(0.75);

console.log('store:', store);
console.log({
    surplus25,
    surplus20,
    surplus10,
    maintenance,
    deficit10,
    deficit20,
    deficit25,
});
