// Tablet stylus-friendly input patch (safe no-op if elements don't exist)
(function(){
  'use strict';
  function harden(el){
    try{
      el.style.touchAction = 'none';
    }catch(e){}
    el.addEventListener('touchmove', function(ev){ ev.preventDefault(); }, {passive:false});
    el.addEventListener('gesturestart', function(ev){ ev.preventDefault(); }, {passive:false});
    el.addEventListener('gesturechange', function(ev){ ev.preventDefault(); }, {passive:false});
    el.addEventListener('gestureend', function(ev){ ev.preventDefault(); }, {passive:false});
  }

  function apply(){
    var nodes = document.querySelectorAll(
      'canvas, .dicom-canvas, .fabric-canvas, .draw-layer, .panel canvas, #dicomCanvas, #overlayCanvas'
    );
    nodes.forEach(harden);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', apply, {once:true});
  }else{
    apply();
  }
})();
