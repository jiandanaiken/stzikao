/**
 * Cindx
 * Copyright (C) 2004 - 2007 Arturya <arturya[at]gmail[dot]com>
 * All rights reserved.
 * http://www.cindx.com, http://www.arturya.com
 */

if (typeof cindx == "undefined" || cindx == null) {
  cindx = new Object();
}

cindx.home = function() {
}

cindx.home.join = function(glue, pieces) {
  var str = '';
  for (p in pieces) {
    str += pieces[p] + '|';
  }
  return str.substring(0, str.length - 1);
}

cindx.home.flashNews = function(src, width, height, images, links, texts, text_height) {
  var flash = new Object();
  flash.src = src;
  flash.width = width;
  flash.height = height;
  flash.images = images;
  flash.links =  links;
  flash.texts =  texts;
  flash.textHeight = text_height;
  var text_align= 'center'
  var interval_time=3 
  flash.params =  "pics=" + flash.images + "&links=" + flash.links + "&texts=" + flash.texts + "&borderwidth=" + flash.width + "&borderheight=" + flash.height + "&textheight=" + flash.textHeight+'&text_align='+text_align+'&interval_time='+interval_time;
  flash.html = "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\""
    + "codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\""
    + "width=\"" + flash.width + "\""
    + "height=\"" + (flash.height + flash.textHeight) + "\">"
    + "<param name=\"allowScriptAccess\" value=\"sameDomain\">"
    + "<param name=\"movie\" value=\"" + flash.src + "\">"
    + "<param name=\"quality\" value=\"high\">"
    + "<param name=\"bgcolor\" value=\"#fffff\">"
    + "<param name=\"menu\" value=\"false\">"
    + "<param name=\"wmode\" value=\"transparent\">"
    + "<param name=\"FlashVars\" value=" + flash.params + " />"
    + "<embed src=\"" + flash.src + "\""
    + "  wmode=\"transparent\""
    + "  FlashVars=" + flash.params
    + "  menu=\"false\""
    + "  bgcolor=\"#ffffff\""
    + "  quality=\"high\""
    + "  width=\"" + flash.width + "\""
    + "  height=\"" + (flash.height + flash.textHeight) + "\""
    + "  allowScriptAccess=\"sameDomain\""
    + "  type=\"application/x-shockwave-flash\""
    + "  pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />"
    + "</object>";
  document.write(flash.html);
}