import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  releaseYear: attr('date'),
  library: belongsTo('library'),
  author: belongsTo('author')
});
