/*
	Prologue by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	$(document).on('change', '#idMarca1', function () {
		$("#idModelo1").removeAttr( "style" );
			var idMarca=$('#idMarca1').val();
			var modelos =fn.getModelos($('#idMarca1').val());
			$("#comparador1").attr("src","images/Auto_Comparador.jpg");
            if (modelos.length) {
            	$('#idModelo1').empty();
            	$("#idModelo1").append('<option>Elegir modelo...</option>');
            	$.each(modelos, function (i, dist) {
            		$("#idModelo1").append('<option style="color:black" value="' + dist.codigoModelo + '">' + dist.nombreModelo + '</option>');
            	});
            } 
    });
    $(document).on('change', '#idModelo1', function () {
		$("#idsubModelo1").removeAttr( "style" );
			var idModelo=$('#idModelo1').val();
			var submodelos =fn.getSubModelos($('#idModelo1').val());
			
            if (submodelos.length) {
            	$('#idsubModelo1').empty();
            	$("#idsubModelo1").append('<option>Elegir Sub modelo...</option>');
            	$.each(submodelos, function (i, dist) {
            		$("#idsubModelo1").append('<option style="color:black" value="' + dist.codigoSubModelo + '">' + dist.nombreSubModelo + '</option>');
            	});
            } 
    });
    $(document).on('change', '#idsubModelo1', function () {
    	//Cargar imagen en la caja de imagen
    	$("#comparador1").attr("src","images/FIAT_500.jpg");
	});
	//////////////////////////////////////////////////////
    $(document).on('change', '#idMarca2', function () {
		$("#idModelo2").removeAttr( "style" );
		var idMarca=$('#idMarca2').val();
			var modelos =fn.getModelos($('#idMarca2').val());
			$("#comparador2").attr("src","images/Auto_Comparador.jpg");
            if (modelos.length) {
            	$('#idModelo2').empty();
            	$("#idModelo2").append('<option>Elegir modelo...</option>');
            	$.each(modelos, function (i, dist) {
            		$("#idModelo2").append('<option style="color:black" value="' + dist.codigoModelo + '">' + dist.nombreModelo + '</option>');
            	});
            } 
    });
    $(document).on('change', '#idModelo2', function () {
		$("#idsubModelo2").removeAttr( "style" );
			var idModelo=$('#idModelo2').val();
			var submodelos =fn.getSubModelos($('#idModelo2').val());
            if (submodelos.length) {
            	$('#idsubModelo2').empty();
            	$("#idsubModelo2").append('<option>Elegir Sub modelo...</option>');
            	$.each(submodelos, function (i, dist) {
            		$("#idsubModelo2").append('<option style="color:black" value="' + dist.codigoSubModelo + '">' + dist.nombreSubModelo + '</option>');
            	});
            } 
    });
	$(document).on('change', '#idsubModelo2', function () {
    	//Cargar imagen en la caja de imagen
    	$("#comparador2").attr("src","images/FIAT_Punto.jpg");
	});
	/////////////////////////////////////////////

	$(document).on('change', '#idMarca3', function () {
		$("#idModelo3").removeAttr( "style" );
			var idMarca=$('#idMarca3').val();
			var modelos =fn.getModelos($('#idMarca3').val());
			$("#comparador3").attr("src","images/Auto_Comparador.jpg");
            if (modelos.length) {
            	$('#idModelo3').empty();
            	$("#idModelo3").append('<option>Elegir modelo...</option>');
            	$.each(modelos, function (i, dist) {
            		$("#idModelo3").append('<option style="color:black" value="' + dist.codigoModelo + '">' + dist.nombreModelo + '</option>');
            	});
            } 
    });
    $(document).on('change', '#idModelo3', function () {
		$("#idsubModelo3").removeAttr( "style" );
			var idModelo=$('#idModelo3').val();
			var submodelos =fn.getSubModelos($('#idModelo3').val());
			
            if (submodelos.length) {
            	$('#idsubModelo3').empty();
            	$("#idsubModelo3").append('<option>Elegir Sub modelo...</option>');
            	$.each(submodelos, function (i, dist) {
            		$("#idsubModelo3").append('<option style="color:black" value="' + dist.codigoSubModelo + '">' + dist.nombreSubModelo + '</option>');
            	});
            } 
    });
    $(document).on('change', '#idsubModelo3', function () {
    	//Cargar imagen en la caja de imagen
    	$("#comparador3").attr("src","images/FIAT_500.jpg");
	});
	skel.init({
		reset: 'full',
		breakpoints: {
			'global':	{ range: '*', href: 'css/style.css', containers: 1400, grid: { gutters: 40 }, viewport: { scalable: false } },
			'wide':		{ range: '961-1880', href: 'css/style-wide.css', containers: 1200, grid: { gutters: 40 } },
			'normal':	{ range: '961-1620', href: 'css/style-normal.css', containers: 960, grid: { gutters: 40 } },
			'narrow':	{ range: '961-1320', href: 'css/style-narrow.css', containers: '100%', grid: { gutters: 20 } },
			'narrower':	{ range: '-960', href: 'css/style-narrower.css', containers: '100%', grid: { gutters: 20 } },
			'mobile':	{ range: '-736', href: 'css/style-mobile.css', containers: '100%!', grid: { collapse: true } }
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				sidePanel: {
					hidden: true,
					breakpoints: 'narrower',
					position: 'top-left',
					side: 'left',
					animation: 'pushX',
					width: 240,
					height: '100%',
					clickToHide: true,
					html: '<div data-action="moveElement" data-args="header"></div>',
					orientation: 'vertical'
				},
				sidePanelToggle: {
					breakpoints: 'narrower',
					position: 'top-left',
					side: 'top',
					height: '4em',
					width: '5em',
					html: '<div data-action="toggleLayer" data-args="sidePanel" class="toggle"></div>'
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {

				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});

				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

			}

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

	});

})(jQuery);