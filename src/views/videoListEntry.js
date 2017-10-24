var VideoListEntryView = Backbone.View.extend({
  model: Video,
  events: {
    'click': 'toggle'
  },
  
  initialize: function() {
    this.render();
    // this.videos = new Videos(window.exampleVideoData);
    // this.render()
    // console.log(this.model.attributes.snippet.title)
    // events attribute
    // console.log(this.model.select.called = true);
    // console.log(this.model.select.called);
    // this.on('click:title', this.toggle());
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  toggle: function(e) {
    this.model.select();
  },
  // make function to handle title click

  template: templateURL('src/templates/videoListEntry.html')

});
