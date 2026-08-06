import { ATTRIBUTES, BASE_ATTRIBUTE_VALUE } from './attributes';
import { RACES } from './races';
import { CLASSES } from './classes';
import { getCharacterImage } from '../../../assets/characters/index.js';

export const DND_CONFIG = {
  attributes: ATTRIBUTES,
  baseAttributeValue: BASE_ATTRIBUTE_VALUE,
  origin: {
    list: RACES,
    i18nNamespace: 'races',
    recommendsField: 'recommendedClasses',
    selectLabelKey: 'characterCreation.selectRace',
    stepLabelKey: 'characterCreation.step1',
    modifierLabelKey: 'modifiers.race',
  },
  role: {
    list: CLASSES,
    i18nNamespace: 'classes',
    recommendsField: 'recommendedRaces',
    selectLabelKey: 'characterCreation.selectClass',
    stepLabelKey: 'characterCreation.step2',
    modifierLabelKey: 'modifiers.class',
  },
  sexOptions: ['male', 'female'],
  getCharacterImage,
};