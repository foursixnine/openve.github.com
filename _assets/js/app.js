// app.js
// ======
//

define('app', [
  'faces'
], function(faces) {

  function init() {
    // Load the faces
    faces.load({
      organization_name : 'OpenVE'
    , faces_target      : '.avatar-wrapper'
    , class_name        : 'avatar'
    , details_target    : '.user-description'
    })
  }

  return {
    init : init
  }

})
