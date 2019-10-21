import DS from 'ember-data';
import { match, gte, and, not } from '@ember/object/computed';

const { Model, attr } = DS;

export default Model.extend({
  email: attr('string'),
  message: attr('string'),

  isValidEmail: match('email', /^.+@.+\..+$/),
  isMessageEnoughLong: gte('message.length', 5),

  isValid: and('isValidEmail', 'isMessageEnoughLong'),
  isNotValid: not('isValid')
});
