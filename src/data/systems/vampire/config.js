import { ATTRIBUTES, BASE_ATTRIBUTE_VALUE } from './attributes';
import { CLANS } from './clans';
import { PREDATOR_TYPES } from './predatorTypes';
import { getCharacterImage } from '../../../assets/characters_vampire/index.js';
import { getClanSymbol } from '../../../assets/clan_symbols/index.js';

export const VAMPIRE_CONFIG = {
    attributes: ATTRIBUTES,
    baseAttributeValue: BASE_ATTRIBUTE_VALUE,
    origin: {
        list: CLANS,
        i18nNamespace: 'clans',
        recommendsField: 'recommendedPredatorTypes',
        selectLabelKey: 'characterCreation.selectClan',
        stepLabelKey: 'characterCreation.step1Clan',
        modifierLabelKey: 'modifiers.clan',
        getSymbol: getClanSymbol,
    },

    role: {
        list: PREDATOR_TYPES,
        i18nNamespace: 'predatorTypes',
        recommendsField: 'recommendedClans',
        selectLabelKey: 'characterCreation.selectPredatorType',
        stepLabelKey: 'characterCreation.step2Predator',
        modifierLabelKey: 'modifiers.predatorType',
    },
    sexOptions: ['male', 'female'],
    getCharacterImage,
};