(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
    var fileName = location.href.split("/")[3];
    fileName = fileName.split(".")[0];
    if (fileName) {
        $("#" + fileName).addClass("active");
    } else {
        $("#index").addClass("active");
    }
    $('.carousel').carousel({
        interval: 7500
    });

    $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
        $('.nav-pills').addClass('nav-stacked');
    });

    //Unstack menu when not collapsed
    $('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function () {
        $('.nav-pills').removeClass('nav-stacked');
    });
});

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
