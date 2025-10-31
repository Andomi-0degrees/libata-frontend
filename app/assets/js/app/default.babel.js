(function ($) {
	const app = {
		windowHeight: $(window).height(),
		windowWidth: $(window).width(),
		isMobile: false,
		isTouch: false,
		resizeTimeoutID: null,
		$body: $('body'),
		culture: 'en',
		isIe: false,
		responsiveBreakpointValue: '(max-width: 1200px)',
		responsiveBreakpointBoolean: false,
		hamburgerBoolean: false,
		hamburgerBoolean2: false,
		successSwiper: false,
		tabSwiper: null,
		disableAnimation: false,
		lifestyleSwiper: null,
		markersArray: [],
		//	gallerySlider: '',
		detectDevice() {

			(function (a) {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
					app.isMobile = true;
				}
			}(navigator.userAgent || navigator.vendor || window.opera));
			if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
				app.isTouch = true;
				app.$body.addClass('touch');
			} else {
				app.$body.addClass('no-touch');
			}
		},

		detectCulture() {
			if ($('body').hasClass('ar')) {
				app.culture = 'ar';
			}
		},

		windowResize() {
			app.windowHeight = $(window).height();
			app.windowWidth = $(window).width();
			$('.spotlight__slide.swiper-slide').height($('.swiper-spacer').outerHeight())
		},

		resizeListner() {
			if (!app.isMobile) {
				$(window).resize(() => {
					clearTimeout(app.resizeTimeoutID);
					app.resizeTimeoutID = setTimeout(app.windowResize, 500);
				});
			} else {
				window.addEventListener('orientationchange', () => {
					app.windowResize();
				});
			}
		},

		addEventListner() {
			$('.header__menu').click(function () {
				$('header.header').toggleClass('active')
				$('body').toggleClass('menu-open')

				$('.header.active .nav-link').click(function () {
					$('header.header').removeClass('active')
					$('body').removeClass('menu-open')
				})
				$('.header.active .header__contact a').click(function () {
					$('header.header').removeClass('active')
					$('body').removeClass('menu-open')
				})
			})

			// Mobile toggle functionality
			$('.header__mobile-toggle').click(function () {
				$('header.header').toggleClass('active')
				$('body').toggleClass('menu-open')
			})

			// Close mobile menu when clicking on close button
			$('.header__nav-close').click(function () {
				$('header.header').removeClass('active')
				$('body').removeClass('menu-open')
			})


			$('.menu__close').click(function () {
				$('.header.header').removeClass('active')
				$('body').removeClass('menu-open')
			})



			$('.floating-tools__btn').click(function () {
				$(this).toggleClass('active')
				$('.floating-tools .tools').toggleClass('active')
			})



			$(document).ready(function () {
				var $header = $("header.header");
				var THRESHOLD = 50; // base point
				var HYSTERESIS = 12; // extra distance to avoid flicker
				var isScrolled = false;
				var ticking = false;
				function handleScroll() {
					var st = $(window).scrollTop();
					// add only after crossing threshold + buffer; remove only when below threshold - buffer
					if (!isScrolled && st > (THRESHOLD + HYSTERESIS)) {
						isScrolled = true;
						$header.addClass('scrolled');
					} else if (isScrolled && st < (THRESHOLD - HYSTERESIS)) {
						isScrolled = false;
						$header.removeClass('scrolled');
					}
					// release rAF lock
					ticking = false;
				}
				$(window).on('scroll', function () {
					if (!ticking) {
						window.requestAnimationFrame(handleScroll);
						ticking = true;
					}
				});
				// set initial state
				handleScroll();
			});

			// Contact form: phone input + validation
			if (document.querySelector('#contactForm')) {
				// Toggle headings and career-only fields by enquiry type
				(function () {
					var select = document.getElementById('enquiryType');
					var getInTouchBox = document.querySelector('.contact-form-wrapper .getInTouch');
					var careerBox = document.querySelector('.contact-form-wrapper .career');
					var investmentBox = document.querySelector('.contact-form-wrapper .investment');
					var pressBox = document.querySelector('.contact-form-wrapper .press');
					var charityBox = document.querySelector('.contact-form-wrapper .charity');
					var careerFields = document.querySelector('.contact-form-wrapper .career-only');
					var investmentFields = document.querySelector('.contact-form-wrapper .investment-only');

					function updateVisibility(value) {
						if (!getInTouchBox || !careerBox || !investmentBox) return;
						// placeholder is empty string now
						var isPlaceholder = value === '' || value === 'getInTouch';
						getInTouchBox.style.display = isPlaceholder ? '' : 'none';
						careerBox.style.display = value === 'career' ? '' : 'none';
						investmentBox.style.display = value === 'investment' ? '' : 'none';
						if (pressBox) pressBox.style.display = value === 'press' ? '' : 'none';
						if (charityBox) charityBox.style.display = value === 'charity' ? '' : 'none';
						if (careerFields) careerFields.style.display = value === 'career' ? '' : 'none';
						if (investmentFields) investmentFields.style.display = value === 'investment' ? '' : 'none';
					}

					if (select) {
						updateVisibility(select.value || '');
						select.addEventListener('change', function () {
							updateVisibility(this.value);
						});
					}
				})();

				// Investment uploads + validation
				(function () {
					var wrap = document.querySelector('.investment-only');
					if (!wrap) return;
					var MAX = 2 * 1024 * 1024;

					function bindUpload(btnId, inputId, nameId, options) {
						options = options || {};
						var maxBytes = options.maxBytes || (2 * 1024 * 1024);
						var totalMaxBytes = options.totalMaxBytes || null; // when set, enforce combined total size
						var btn = document.getElementById(btnId);
						var input = document.getElementById(inputId);
						var nameSpan = document.getElementById(nameId);
						if (!input) return;
						if (btn) { btn.addEventListener('click', function () { input.click(); }); }
						input.addEventListener('change', function () {
							var files = Array.prototype.slice.call(this.files || []);
							if (files.length === 0) return;
							var invalid = files.find(function (f) {
								var okType = /(pdf|msword|officedocument|ms-excel|spreadsheetml)/i.test(f.type) || /\.(pdf|doc|docx|xls|xlsx)$/i.test(f.name);
								return !okType || f.size > maxBytes;
							});
							if (invalid) {
								var limitMb = Math.round(maxBytes / (1024 * 1024));
								alert('Upload PDF/DOC/DOCX/XLS/XLSX only. Max ' + limitMb + 'MB per file.');
								this.value = '';
								if (nameSpan) nameSpan.textContent = '';
								return;
							}
							if (totalMaxBytes) {
								var totalBytes = files.reduce(function (sum, f) { return sum + (f.size || 0); }, 0);
								if (totalBytes > totalMaxBytes) {
									var totalMb = Math.round(totalMaxBytes / (1024 * 1024));
									alert('Total upload size must not exceed ' + totalMb + 'MB.');
									this.value = '';
									if (nameSpan) nameSpan.textContent = '';
									return;
								}
							}
							if (nameSpan) nameSpan.textContent = files.map(function (f) { return f.name; }).join(', ');
						});
					}

					// Investment allows multiple, 5MB per file, 5MB total combined (backend rule)
					bindUpload('preInvestmentTrigger', 'preProposalFile', 'preProposalFileName', { maxBytes: 5 * 1024 * 1024, totalMaxBytes: 5 * 1024 * 1024 });
				})();

				// Minimal close handlers for thank you and error modals when used
				(function () {
					var successModal = document.getElementById('thankYouModal');
					var errorModal = document.getElementById('errorModal');
					function wireModal(modal, opts) {
						if (!modal) return;
						var closeBtn = modal.querySelector('.thankyou-modal__close');
						var okBtn = modal.querySelector('.thankyou-modal__ok');
						function close() { modal.classList.remove('open'); if (opts && opts.reloadOnClose) { window.location.reload(); } }
						if (closeBtn) closeBtn.addEventListener('click', close);
						if (okBtn) okBtn.addEventListener('click', close);
						// Disable outside click close: do nothing on backdrop clicks
						modal.addEventListener('click', function (e) {
							return; // noop to prevent closing on outside click
						});
					}
					wireModal(successModal, { reloadOnClose: true });
					wireModal(errorModal, { reloadOnClose: false });
					// expose open methods for AJAX handlers
					window.showThankYouModal = function () { if (successModal) successModal.classList.add('open'); };
					window.showErrorModal = function (msg) {
						if (!errorModal) return;
						var desc = errorModal.querySelector('#errorDesc');
						if (desc && msg) desc.textContent = msg;
						errorModal.classList.add('open');
					};
				})();

				// AJAX submit (Umbraco) using provided spec, adapted to current IDs/names
				(function () {
					var $form = $('#contactForm');
					if (!$form.length) return;
					var $message = $('#formMessage');
					function setMsg(text, isError) {
						if (!$message.length) return;
						$message.css('color', isError ? 'red' : 'green').text(text);
					}

					$form.on('submit', function (e) {
						e.preventDefault();
						setMsg('', false);

						// Ensure phone values are populated BEFORE building FormData
						try {
							var phoneInputEl = document.querySelector('#contactNumber');
							var phoneHiddenEl = document.querySelector('#contactNumberHidden');
							var fullNumber = '';
							if (phoneInputEl) {
								if (window.intlTelInput && window.intlTelInputGlobals && window.intlTelInputGlobals.getInstance) {
									var itiInstance = window.intlTelInputGlobals.getInstance(phoneInputEl);
									fullNumber = itiInstance && itiInstance.getNumber ? itiInstance.getNumber() : (phoneInputEl.value || '');
								} else {
									fullNumber = phoneInputEl.value || '';
								}
							}
							if (phoneHiddenEl) { phoneHiddenEl.value = fullNumber; }
							var $fullPhone = $('input[name="fullPhone"]');
							if ($fullPhone.length) { $fullPhone.val(fullNumber); }
							else { $('<input>').attr({ type: 'hidden', name: 'fullPhone', value: fullNumber }).appendTo(this); }
						} catch (err) { /* ignore */ }

						var type = $('#enquiryType').val();
						var valid = true; var errorMessage = '';
						if (!type) { valid = false; errorMessage = 'Please select Type of Enquiry.'; }

						// Career validations (single CV, 2MB)
						if (valid && type === 'career') {
							var linkedInUrl = $('input[name="linkedinUrl"]').val();
							var cvInput = document.getElementById('cvFile');
							var cvFile = cvInput && cvInput.files ? cvInput.files[0] : null;
							if (!linkedInUrl) { valid = false; errorMessage = 'LinkedIn URL is required for Career.'; }
							else if (!cvFile) { valid = false; errorMessage = 'Please upload your CV for Career.'; }
							else {
								var okType = /(pdf|msword|officedocument)/i.test(cvFile.type) || /\.(pdf|doc|docx)$/i.test(cvFile.name);
								if (!okType) { valid = false; errorMessage = 'CV must be PDF/DOC/DOCX.'; }
								else if (cvFile.size > 2 * 1024 * 1024) { valid = false; errorMessage = 'CV file must be less than 2MB.'; }
							}
						}

						// Investment validations (multiple allowed, each 5MB)
						if (valid && type === 'investment') {
							var propInput = document.getElementById('preProposalFile');
							var files = propInput && propInput.files ? Array.prototype.slice.call(propInput.files) : [];
							if (files.length === 0) { valid = false; errorMessage = 'Please upload at least one Investment file.'; }
							else {
								for (var i = 0; i < files.length; i++) {
									var f = files[i];
									var ok = /(pdf|msword|officedocument|ms-excel|spreadsheetml)/i.test(f.type) || /\.(pdf|doc|docx|xls|xlsx)$/i.test(f.name);
									if (!ok) { valid = false; errorMessage = 'Investment files must be PDF/DOC/DOCX/XLS/XLSX.'; break; }
									if (f.size > 5 * 1024 * 1024) { valid = false; errorMessage = 'Each Investment file must be less than 5MB.'; break; }
								}
								if (valid) {
									var total = files.reduce(function (sum, f) { return sum + (f.size || 0); }, 0);
									if (total > 5 * 1024 * 1024) { valid = false; errorMessage = 'Total Investment files size must not exceed 5MB.'; }
								}
							}
						}

						// trigger jQuery Validate if present
						if ($.fn.validate) {
							var validator = $form.data('validator');
							if (validator) {
								if (!$form.valid()) {
									valid = false;
								}
							}
						}
						if (!valid) { setMsg(errorMessage, true); return; }

						// prevent double submit and show loader overlay
						var $submitBtn = $(this).find('.btn-submit');
						var $loader = $('.screen-loader');
						$submitBtn.prop('disabled', true);
						if ($loader.length) { $loader.addClass('open').attr('aria-hidden', 'false'); }

						var formData = new FormData(this);
						$.ajax({
							url: '/umbraco/api/Inquiry/submit',
							type: 'POST',
							data: formData,
							processData: false,
							contentType: false,
							success: function (res) {
								if (res && (res.success === true || res.Success === true)) {
									setMsg(res.message || 'Submitted successfully.', false);
									$form.get(0).reset();
									$('.career-only, .investment-only').hide();
									$('#cvFileName, #preInvestmentFileName').text('');
									if (window.showThankYouModal) { window.showThankYouModal(); }
									$submitBtn.prop('disabled', false);
									if ($loader.length) { $loader.removeClass('open').attr('aria-hidden', 'true'); }
								} else {
									var err = (res && (res.message || res.Message)) || 'Submission failed. Please try again.';
									setMsg(err, true);
									if (window.showErrorModal) { window.showErrorModal(err); }
									$submitBtn.prop('disabled', false);
									if ($loader.length) { $loader.removeClass('open').attr('aria-hidden', 'true'); }
								}
							},
							error: function () { var err = 'Error submitting form. Please try later.'; setMsg(err, true); if (window.showErrorModal) { window.showErrorModal(err); } $submitBtn.prop('disabled', false); if ($loader.length) { $loader.removeClass('open').attr('aria-hidden', 'true'); } }
						});
					});
				})();

				// CV/Resume client-side validation (<= 2MB, pdf/doc/docx)
				(function () {
					var input = document.getElementById('cvFile');
					var drop = document.getElementById('cvDropzone');
					var list = document.getElementById('cvFileList');
					var placeholder = drop ? drop.querySelector('.file-drop__placeholder') : null;
					if (!input || !drop || !list) return;
					var MAX = 2 * 1024 * 1024;

					function setHasFile(has) {
						if (!drop) return;
						if (has) { drop.classList.add('has-file'); }
						else { drop.classList.remove('has-file'); }
					}

					function render(file) {
						list.innerHTML = '';
						if (!file) return;
						var li = document.createElement('li');
						li.innerHTML = '<span class="file-icon"></span><span class="file-name" title="' + (file.name || '') + '">' + file.name + '</span><button type="button" class="file-remove" aria-label="Remove">×</button>';
						li.querySelector('.file-remove').addEventListener('click', function (e) { e.stopPropagation(); input.value = ''; list.innerHTML = ''; setHasFile(false); });
						list.appendChild(li);
						setHasFile(true);
					}
					function validate(file) {
						if (!file) return true;
						var okType = /(pdf|msword|officedocument)/i.test(file.type) || /\.(pdf|doc|docx)$/i.test(file.name);
						if (!okType || file.size > MAX) {
							alert('Upload a PDF/DOC/DOCX file up to 2MB.');
							return false;
						}
						return true;
					}

					drop.addEventListener('click', function (e) { input.click(); });
					drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
					['dragenter', 'dragover'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('is-dragover'); }); });
					['dragleave', 'drop'].forEach(function (t) { drop.addEventListener(t, function () { drop.classList.remove('is-dragover'); }); });
					drop.addEventListener('drop', function (e) {
						e.preventDefault();
						var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
						if (!validate(f)) { input.value = ''; list.innerHTML = ''; setHasFile(false); return; }
						input.files = e.dataTransfer.files;
						render(f);
					});
					input.addEventListener('change', function () {
						var f = this.files && this.files[0];
						if (!validate(f)) { this.value = ''; list.innerHTML = ''; setHasFile(false); return; }
						render(f);
					});
				})();

				// Investment dropzone (multi with remove buttons)
				(function () {
					var input = document.getElementById('preProposalFile');
					var drop = document.getElementById('investmentDrop');
					var list = document.getElementById('investmentFileList');
					if (!input || !drop || !list) return;
					var MAX_PER = 5 * 1024 * 1024; var MAX_TOTAL = 5 * 1024 * 1024;
					// track current files across multiple selections/drops
					var currentFiles = [];

					function validateAll(files) {
						var total = 0;
						for (var i = 0; i < files.length; i++) {
							var f = files[i];
							var ok = /(pdf|msword|officedocument|ms-excel|spreadsheetml)/i.test(f.type) || /\.(pdf|doc|docx|xls|xlsx)$/i.test(f.name);
							if (!ok || f.size > MAX_PER) return false;
							total += f.size || 0;
						}
						return total <= MAX_TOTAL;
					}

					function uniqueByNameSize(files) {
						var seen = Object.create(null);
						var out = [];
						for (var i = 0; i < files.length; i++) {
							var f = files[i];
							var key = (f.name || '') + '::' + (f.size || 0);
							if (!seen[key]) { seen[key] = true; out.push(f); }
						}
						return out;
					}

					function setInputFiles(files) {
						var dt = new DataTransfer();
						files.forEach(function (x) { dt.items.add(x); });
						input.files = dt.files;
					}

					function renderList(files) {
						list.innerHTML = '';
						Array.prototype.slice.call(files).forEach(function (f, idx) {
							var li = document.createElement('li');
							li.innerHTML = '<span class="file-icon"></span><span class="file-name" title="' + (f.name || '') + '">' + f.name + '</span><button type="button" class="file-remove" aria-label="Remove">×</button>';
							li.querySelector('.file-remove').addEventListener('click', function () {
								var arr = currentFiles.slice();
								arr.splice(idx, 1);
								currentFiles = arr;
								setInputFiles(currentFiles);
								renderList(input.files);
								if ($ && $.fn && $.fn.validate) { $(input).valid(); }
							});
							list.appendChild(li);
						});
					}

					drop.addEventListener('click', function () { input.click(); });
					drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
					['dragenter', 'dragover'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('is-dragover'); }); });
					['dragleave', 'drop'].forEach(function (t) { drop.addEventListener(t, function () { drop.classList.remove('is-dragover'); }); });
					drop.addEventListener('drop', function (e) {
						e.preventDefault();
						var incoming = e.dataTransfer && e.dataTransfer.files ? Array.prototype.slice.call(e.dataTransfer.files) : [];
						var merged = uniqueByNameSize(currentFiles.concat(incoming));
						if (!validateAll(merged)) { alert('Upload PDF/DOC/DOCX/XLS/XLSX only. Max 5MB each and 5MB total.'); return; }
						currentFiles = merged;
						setInputFiles(currentFiles);
						renderList(currentFiles);
						if ($ && $.fn && $.fn.validate) { $(input).valid(); }
					});
					input.addEventListener('change', function () {
						var incoming = this.files ? Array.prototype.slice.call(this.files) : [];
						var merged = uniqueByNameSize(currentFiles.concat(incoming));
						if (!validateAll(merged)) { alert('Upload PDF/DOC/DOCX/XLS/XLSX only. Max 5MB each and 5MB total.'); this.value = ''; renderList(currentFiles); return; }
						currentFiles = merged;
						setInputFiles(currentFiles);
						renderList(currentFiles);
						if ($ && $.fn && $.fn.validate) { $(input).valid(); }
					});

					// initialize currentFiles from any pre-filled input state
					try { currentFiles = Array.prototype.slice.call(input.files || []); } catch (e) { currentFiles = []; }
				})();

				// Message 10–500 character live counter and auto-resize
				(function () {
					var textarea = document.getElementById('message');
					var counterEl = document.querySelector('.char-count');
					var MIN_LIMIT = 10;
					var CHAR_LIMIT = 500;
					if (textarea && counterEl) {
						var update = function () {
							var value = textarea.value || '';
							var len = value.length;
							if (len > CHAR_LIMIT) {
								textarea.value = value.substring(0, CHAR_LIMIT);
								len = CHAR_LIMIT;
							}
							counterEl.textContent = len + '/' + CHAR_LIMIT + ' (min ' + MIN_LIMIT + ')';
							// auto-resize to fit content
							textarea.style.height = 'auto';
							textarea.style.height = textarea.scrollHeight + 'px';
						};

						textarea.addEventListener('input', update);
						// initialize on load
						update();
					}
				})();
				// intlTelInput
				try {
					var phoneInput = document.querySelector('#contactNumber');
					var phoneHidden = document.querySelector('#contactNumberHidden');
					if (window.intlTelInput && phoneInput) {
						var iti = window.intlTelInput(phoneInput, {
							initialCountry: 'ae',
							separateDialCode: true,
							preferredCountries: ['ae'],
							utilsScript: '../assets/js/lib/intlTelInput/utils.js'
						});

						// numeric-only input and max length enforcement (ignores spaces and plus)
						phoneInput.addEventListener('input', function () {
							this.value = this.value.replace(/[^\d\s+()-]/g, '');
							var digits = this.value.replace(/\D/g, '');
							if (digits.length > 15) {
								// trim extra digits while preserving formatting prefix
								var excess = digits.length - 15;
								var keep = digits.substring(0, digits.length - excess);
								this.value = keep;
							}
						});

						// jQuery Validate custom method that defers to intl-tel-input
						if ($.validator && !$.validator.methods.intlValid) {
							$.validator.addMethod('intlValid', function (value, element) {
								if (!window.intlTelInput || !element) return true;
								try {
									var instance = window.intlTelInputGlobals.getInstance(element);
									return instance ? instance.isValidNumber() : true;
								} catch (e) { return true; }
							}, 'Enter a valid contact number');
						}

						// Strict email regex
						if ($.validator && !$.validator.methods.strictEmail) {
							var EMAIL_REGEX = /^[A-Za-z0-9.!#$%&'*+\/=?^_`{|}~-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;
							$.validator.addMethod('strictEmail', function (value, element) {
								if (this.optional(element)) return true;
								return EMAIL_REGEX.test((value || '').trim());
							}, 'Enter a valid email address');
						}

						// Person name regex: letters with spaces/'/-; 2-60 chars
						if ($.validator && !$.validator.methods.personName) {
							var NAME_REGEX = /^[\p{L}][\p{L}\p{M}\s'\-]{0,58}[\p{L}]$/u;
							$.validator.addMethod('personName', function (value, element) {
								if (this.optional(element)) return true;
								var v = (value || '').trim();
								if (v.length < 2 || v.length > 60) return false;
								return NAME_REGEX.test(v);
							}, 'Enter a valid full name');
						}

						// Message safety: block obvious SQL-injection patterns (client-side guard only)
						if ($.validator && !$.validator.methods.noSQLi) {
							$.validator.addMethod('noSQLi', function (value, element) {
								if (this.optional(element)) return true;
								var v = String(value || '').toLowerCase();
								// Fast reject: SQL comments or stacked queries
								if (/--|\/\*/.test(v)) return false;
								if (/;\s*\b(select|insert|update|delete|drop|alter|create|exec|execute)\b/.test(v)) return false;
								// Common keyword patterns rather than single words
								if (/\bunion\s+select\b/.test(v)) return false;
								if (/\bselect\s+.+\s+from\b/.test(v)) return false;
								if (/\binsert\s+into\b/.test(v)) return false;
								if (/\bupdate\s+\w+\s+set\b/.test(v)) return false;
								if (/\bdelete\s+from\b/.test(v)) return false;
								if (/\bdrop\s+(table|database)\b/.test(v)) return false;
								if (/\balter\s+(table|database)\b/.test(v)) return false;
								if (/\bcreate\s+(table|database|function|procedure)\b/.test(v)) return false;
								if (/\bexec(ute)?\b/.test(v)) return false;
								if (/\bor\s+1\s*=\s*1\b/.test(v)) return false;
								return true;
							}, 'Please remove SQL-like content.');
						}

						// Ensure investment file presence is validated via FileList (works with drag-and-drop)
						if ($.validator && !$.validator.methods.investmentFilesPresent) {
							$.validator.addMethod('investmentFilesPresent', function (value, element) {
								var type = $('#enquiryType').val();
								if (type !== 'investment') return true;
								var files = element && element.files ? element.files : [];
								return files.length > 0;
							}, 'Please upload at least one proposal file for Investment enquiries.');
						}

						// Store full number on submit and also replace contactNumber value
						$('#contactForm').on('submit', function () {
							if (iti) {
								var full = iti.getNumber();
								// put full number into hidden CMS field
								if (phoneHidden) { phoneHidden.value = full; }
								// also keep a separate hidden helper if needed
								$('<input>').attr({ type: 'hidden', name: 'fullPhone', value: full }).appendTo(this);
							}
						});
					}
				} catch (e) { /* ignore */ }

				// jQuery Validate rules
				if ($.fn.validate) {
					// Remove maxWords and rely on maxlength (HTML5 + jQuery Validate)

					$('#contactForm').validate({
						errorClass: 'error',
						// ignore hidden fields except file inputs and our hidden enquiryType input
						ignore: ':hidden:not(#cvFile):not(#preProposalFile):not(#enquiryType):not(#countryOption)',
						rules: {
							fullName: { required: true, personName: true },
							email: { required: true, strictEmail: true },
							// validate the visible phone input; hidden field is populated on submit
							contactNumberView: {
								required: true,
								digits: true,
								maxlength: 15,
								// Validate using intl-tel-input if available
								intlValid: true
							},
							message: { required: true, minlength: 10, maxlength: 500, noSQLi: true },
							enquiryType: { required: true },
							countryOption: { required: true },
							// Career-only fields
							linkedinUrl: {
								required: {
									depends: function () { return $('#enquiryType').val() === 'career'; }
								},
								url: true
							},
							cvFile: {
								required: {
									depends: function () { return $('#enquiryType').val() === 'career'; }
								}
							},
							// Investment-only field (validate via FileList so drag-and-drop is recognized)
							preProposalFile: { investmentFilesPresent: true }
						},
						messages: {
							fullName: 'Enter a valid full name',
							email: 'Enter a valid email address',
							contactNumberView: 'Enter a valid contact number',
							message: {
								required: 'Please enter your message (10–500 characters)',
								minlength: 'Your message is too short (min 10 characters)',
								maxlength: 'Your message is too long (max 500 characters)'
							},
							enquiryType: 'Please select an option',
							countryOption: 'Please select your country',
							linkedinUrl: {
								required: 'LinkedIn URL is required for Career.',
								url: 'Enter a valid LinkedIn URL'
							},
							cvFile: {
								required: 'Please upload your CV for Career.'
							},
							preProposalFile: {
								required: 'Please upload at least one proposal file for Investment enquiries.'
							}
						},
						errorPlacement: function (error, element) {
							var $el = $(element);
							if ($el.is('#cvFile')) {
								// place under CV dropzone preview
								error.insertAfter($('#cvFileList').closest('.file-drop__preview'));
								return;
							}
							if ($el.is('#preProposalFile')) {
								error.insertAfter($('#investmentFileList').closest('.file-drop__preview'));
								return;
							}
							if ($el.is(':file')) {
								error.insertAfter($el.closest('.file-drop__preview').length ? $el.closest('.file-drop__preview') : $el);
							} else {
								// show enquiryType hidden input errors next to custom dropdown UI
								if ($el.attr('id') === 'enquiryType' && $('#customEnquiry').length) {
									error.insertAfter($('#customEnquiry'));
								} else if ($el.attr('id') === 'countryOption' && $('#customCountry').length) {
									error.insertAfter($('#customCountry'));
								} else {
									error.insertAfter($el.closest('.custom-select-simple').length ? $el.closest('.custom-select-simple') : $el);
								}
							}
						},
						highlight: function (element) {
							$(element).closest('.form-group').addClass('field-error');
						},
						unhighlight: function (element) {
							$(element).closest('.form-group').removeClass('field-error');
						}
					});
				}

				// Custom dropdown behavior for enquiry type
				(function () {
					var wrap = document.getElementById('customEnquiry');
					if (!wrap) return;
					var selected = wrap.querySelector('.dropdown-selected');
					var options = wrap.querySelector('.dropdown-options');
					var hidden = document.getElementById('enquiryType');
					if (!selected || !options || !hidden) return;
					selected.addEventListener('click', function () {
						var opening = options.style.display !== 'flex';
						options.style.display = opening ? 'flex' : 'none';
						if (opening) collapseExtra();
					});
					options.querySelectorAll('.dropdown-option').forEach(function (opt) {
						opt.addEventListener('click', function () {
							var value = this.getAttribute('data-value');
							var text = this.textContent;
							selected.textContent = text;
							hidden.value = value;
							options.style.display = 'none';
							// trigger change so visibility logic updates
							var evt; try { evt = new Event('change'); } catch (e) { evt = document.createEvent('HTMLEvents'); evt.initEvent('change', true, false); }
							hidden.dispatchEvent(evt);
							// trigger jQuery validate update
							if ($ && $.fn && $.fn.validate) { $(hidden).valid(); }
						});
					});
					document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) options.style.display = 'none'; });
				})();

				// Custom dropdown behavior for country (theme-aligned) with lazy "More..." reveal
				(function () {
					var wrap = document.getElementById('customCountry');
					if (!wrap) return;
					var selected = wrap.querySelector('.dropdown-selected');
					var options = wrap.querySelector('.dropdown-options');
					var hidden = document.getElementById('countryOption');
					if (!selected || !options || !hidden) return;
					// Lazy reveal: show first N options, reveal rest under a More... row
					var MAX_VISIBLE = 6;
					var optionNodes = Array.prototype.slice.call(options.querySelectorAll('.dropdown-option'));
					var caretSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="11" viewBox="0 0 23 11" fill="none"><path d="M1.1875 0.53125C1.32812 0.34375 1.51562 0.25 1.75 0.25C1.89062 0.25 2.07812 0.296875 2.21875 0.4375L11.4531 8.92188L20.7344 0.4375C21.0156 0.15625 21.4844 0.15625 21.7656 0.484375C22.0469 0.765625 22.0469 1.23438 21.7188 1.51562L11.9688 10.5156C11.6875 10.7969 11.2656 10.7969 10.9844 10.5156L1.23438 1.51562C0.90625 1.28125 0.90625 0.8125 1.1875 0.53125Z" fill="#575F74"/></svg>';
					var $moreRow = $('<div class="dropdown-more"><span class="more-text">More...</span><span class="more-caret" aria-hidden="true"></span></div>');
					$moreRow.find('.more-caret').html(caretSvg);
					var moreRow = $moreRow.get(0);
					function collapseExtra() {
						optionNodes.forEach(function (node, index) { node.style.display = (index >= MAX_VISIBLE) ? 'none' : ''; });
						if (optionNodes.length > MAX_VISIBLE) {
							if (!options.contains(moreRow)) options.appendChild(moreRow);
							moreRow.style.display = 'block';
							moreRow.setAttribute('aria-expanded', 'false');
							moreRow.classList.remove('disabled');
							var t = moreRow.querySelector('.more-text'); if (t) t.textContent = 'More...';
							var c = moreRow.querySelector('.more-caret'); if (c) c.innerHTML = caretSvg;
						} else {
							moreRow.style.display = 'none';
							if (options.contains(moreRow)) options.removeChild(moreRow);
						}
					}
					function expandAllOnce() {
						optionNodes.forEach(function (node) { node.style.display = ''; });
						moreRow.setAttribute('aria-expanded', 'true');
						moreRow.classList.add('disabled');
					}
					collapseExtra();
					$moreRow.on('click', function () { if (moreRow.classList.contains('disabled')) return; expandAllOnce(); });

					selected.addEventListener('click', function () {
						var opening = options.style.display !== 'flex';
						options.style.display = opening ? 'flex' : 'none';
						if (opening) collapseExtra();
					});
					options.querySelectorAll('.dropdown-option').forEach(function (opt) {
						opt.addEventListener('click', function () {
							var value = this.getAttribute('data-value');
							var text = this.textContent;
							selected.textContent = text;
							hidden.value = value;
							options.style.display = 'none';
							collapseExtra();
							// trigger jQuery validate update
							if ($ && $.fn && $.fn.validate) { $(hidden).valid(); }
						});
					});
					document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) { options.style.display = 'none'; collapseExtra(); } });
				})();
			}




			// $('.form-btn').click(function (e) {
			// 	e.preventDefault()
			// 	$('.inquire__calculator').removeClass('d-none')
			// 	$('.inquire__form').addClass('d-none')
			// })




			if (app.windowWidth <= 992) {
				$('.menu__main a').click(function (e) {
					// alert('asd')
					e.preventDefault()
				})
			}




			setTimeout(function () {

				$('footer .menu__right').addClass('d-none')
				$('footer .menu__right').eq($('footer .menu__main a.active').index()).removeClass('d-none')
				$('nav .menu__right').addClass('d-none')
				$('nav .menu__right').eq($('nav .menu__main a.active').index()).removeClass('d-none')
			})





			$('footer .menu__main a').hover(function () {

				$('footer .menu__main a').removeClass('hover')

				$(this).addClass('hover')
				$('footer .menu__right').addClass('d-none')
				$('footer .menu__right').eq($(this).index()).removeClass('d-none')
				console.log("footer hover")
			}, function () {



			})
			$('nav .menu__main a').hover(function () {

				$('nav .menu__main a').removeClass('hover')
				$(this).addClass('hover')
				$('nav .menu__right').addClass('d-none')
				$('nav .menu__right').eq($(this).index()).removeClass('d-none')

			}, function () {



			})

			$('footer .row').eq(1).hover(function () {


			}, function () {

				console.log("hover out from footer")


				$('footer .menu__main a').removeClass('hover')
				$('footer .menu__right').addClass('d-none')
				$('footer .menu__right').eq($('footer .menu__main a.active').index()).removeClass('d-none')

			})



			$('.search__open').click(function () {

				$('.search__cont').slideDown();
				$('.search__close').show();
				$(this).hide();
				$('.search .form-control').focus()
			})
			$('.search__close').click(function () {

				$('.search__cont').slideUp();
				$('.search__open').show();
				$(this).hide()
			})



			$('#bank-currency-select').change(function () {
				var value = $(this).val()
				if (value === "-1") {
					$('.label-listing p').show()
				}
				else {


					$('.label-listing p').hide()
					$(`.label-listing p[data-currency="${value}"]`).show()
				}
			})

		},

		lazyLoad: function () {

			var lazyLoadInstance = new LazyLoad({
				// Your custom settings go here
			});
		},
		swiper: function () {

			let platforms;
			let spotlightSwiper;

			function initializeSwiper() {
				if (window.innerWidth <= 992) {
					if (!platforms) {
						platforms = new Swiper('.platforms .platforms__slider', {
							slidesPerView: 'auto',
							spaceBetween: 56,
							loop: true,
							breakpoints: {
								768: {
									spaceBetween: 56
								}
							},
						});
					}
				} else {
					if (platforms) {
						platforms.destroy();
						platforms = undefined;
					}
				}

				// Spotlight slider always on
				function setHeaderLogoHiddenMobile(isHidden) {
					var headerEl = document.querySelector('header.header');
					if (!headerEl) return;
					// Only apply on mobile widths
					if (window.innerWidth <= 992) {
						if (isHidden) headerEl.classList.add('hide-logo-mobile');
						else headerEl.classList.remove('hide-logo-mobile');
					} else {
						headerEl.classList.remove('hide-logo-mobile');
					}
				}

				function syncHeaderLogoMobile(swiperInstance) {
					try {
						var isFirst = false;
						var activeEl = swiperInstance && swiperInstance.slides ? swiperInstance.slides[swiperInstance.activeIndex] : null;
						if (activeEl && activeEl.classList && activeEl.classList.contains('slide-1')) {
							isFirst = true;
						} else if (typeof swiperInstance.realIndex === 'number') {
							isFirst = swiperInstance.realIndex === 0;
						}
						setHeaderLogoHiddenMobile(!!isFirst);
					} catch (e) { /* no-op */ }
				}

				if (!spotlightSwiper && document.querySelector('.spotlight .spotlight__slider')) {
					spotlightSwiper = new Swiper('.spotlight .spotlight__slider', {
						loop: true,
						effect: 'fade',
						fadeEffect: { crossFade: true },
						speed: 800,
						autoplay: { delay: 5000, disableOnInteraction: false },
						pagination: {
							el: '.spotlight__pagination',
							clickable: true,
						},
					});

					// Mobile-only: hide header logo when slide 1 is active
					spotlightSwiper.on('slideChange', function () { syncHeaderLogoMobile(this); });
					// set initial state
					syncHeaderLogoMobile(spotlightSwiper);
				}
			}

			initializeSwiper();

			$(window).resize(function () {
				initializeSwiper();
				// also re-sync header logo on breakpoint change
				try { if (spotlightSwiper) { var e = { target: window }; /* noop */ } } catch (e) { /* noop */ }
			});

		},

		tabs() {

			const tabNav = $('.tabs__head');
			const activeClass = 'active';
			let $this;
			let currentIndex;

			$.each(tabNav, function (index, elem) {
				const selector = $(elem);
				const tabNavList = selector.find('> ul > li');
				const tabPane = selector.parent().find('.tabs__pane');
				tabNavList.eq(0).find('> a').addClass(activeClass);
				tabPane.eq(0).addClass(activeClass);

				tabNavList.on('click', function (e) {
					$this = $(this);

					if (app.isMobile) {
						//	$this.find('a').get(0).scrollIntoView(true)
					}
					else {
						//	$this.find('a').get(0).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
					}


					// if (!$this.parent().hasClass('js-hash-clickable')) {
					// 	// debugger
					// 	e.preventDefault()
					// }
					currentIndex = $this.index();
					if ($this.parent().hasClass('js-has-slide-to'))
						app.tabSwiper.slideTo(currentIndex);


					tabPane.removeClass(activeClass);
					if ($this.closest('.tabs__head').next(".tabs__body").length) {
						$this.closest('.tabs__head').next(".tabs__body").find('> .tabs__pane').eq(currentIndex).addClass(activeClass);
					} else {
						$this.closest('.tabs__head').next(".tabs__outer").find('> .tabs__body').find('> .tabs__pane').eq(currentIndex).addClass(activeClass);
					}


					// console.log($this.closest('.tabs__head').next().find('.tabs__pane').eq(currentIndex).find('.tabs-nav__list .tabs-nav__link').eq(0).trigger('click'))
					tabNavList.find('> a').removeClass(activeClass);

					if (!$this.find('> a').hasClass(activeClass)) {
						$this.find('> a').addClass(activeClass);
					}


					if ($this.parents('.tabs__body').length === 0) {


						$('.tabs__pane.active').find('.tabs-nav__list .tabs-nav__link').eq(0).trigger('click')
					}
					// console.log("clicked")
				});

			});
			let url = window.location;
			let qs = url.hash;
			let qsText = qs.slice(1, qs.length);


			if (qsText) {

				$('[href="#' + qsText + '"]').click();



				// if ($('.js-hash-clickable').length) {
				// 	$('[href="#' + qsText + '"]').click();
				// 	$('html, body').animate({
				// 		scrollTop: $('[href="#' + qsText + '"]').offset().top - 100
				// 	}, 300);
				// } else {
				// 	$('.tabs-nav__list').each(function (i, elem) {
				// 		if ($(elem).find('.tabs-nav__link').text().toLowerCase() === qsText) {
				// 			$(elem).find('.tabs-nav__link').click();
				// 			$('html, body').animate({
				// 				scrollTop: $('.tabs__body').offset().top
				// 			}, 300);
				// 		}
				// 	});
				// }
			}

		},

		rangeSlider() {
			let homeLoanAmount = $('#home-loan-amount').attr('data-min');
			let homeLoanTenure = $('#home-loan-tenure').attr('data-min');
			let personalLoanAmount = $('#personal-loan-amount').attr('data-min');
			let personalLoanTenure = $('#personal-loan-tenure').attr('data-min');
			let autoLoanAmount = $('#auto-loan-amount').attr('data-min');
			let autoLoanTenure = $('#auto-loan-tenure').attr('data-min');



			var $range = $(".js-range-slider"),
				min = 1,
				max = 10;

			$range.ionRangeSlider({
				skin: "modern",
				type: "single",
				min: min,
				max: max,
				from: 10,
				prettify: function (num) {
					var tmp_min = min,
						tmp_max = max,
						tmp_num = num;

					if (min < 0) {
						tmp_min = 0;
						tmp_max = max - min;
						tmp_num = num - min;
						tmp_num = tmp_max - tmp_num;
						return tmp_num + min;
					} else {
						num = max - num;
						return num;
					}
				}
			});


			$(".range-slider").each(function () {

				var $this = $(this),
					rangeInput = $(this);

				var min =
					$this.data("min") === "" || $this.data("min") === undefined
						? 5
						: $this.data("min");
				var max =
					$this.data("max") === "" || $this.data("max") === undefined
						? 30
						: $this.data("max");

				// debugger

				//console.log(min + ' : min');
				//console.log(max + ' : max');

				var reverse = function (num) {
					return max - (num - min);
				};




				rangeInput.ionRangeSlider({


					prettify_enabled: true,
					prettify_separator: ",",

					from: app.culture === 'ar' ? max : min,

					prettify: function (num) {

						if (app.culture === 'ar') {
							return num = reverse(num);
							/* var tmp_min = min,
								tmp_max = max,
								tmp_num = num;

							if (min < 0) {
								tmp_min = 0;
								tmp_max = max - min;
								tmp_num = num - min;
								tmp_num = tmp_max - tmp_num;
								return tmp_num + min;
							} else {
								num = max - num;
								return num + 1;
							} */

						} else {

							return num;

						}


					},

					/* prettify: function (num) {
						//console.log(num);

						if (app.isRTL) {
							num = reverse(num);
						}

						var tmp_min = min,
							tmp_max = max,
							tmp_num = num;

						if (min < 0) {
							tmp_min = 0;
							tmp_max = max - min;
							tmp_num = num - min;
							tmp_num = tmp_max - tmp_num;
							return tmp_num + min;
						} else {
							num = max - num;
							return num;
						}




					}, */

					/* 	onStart: function (data) {
							fixPosition(data.slider, 0);
						}, */

					onChange: function (data) {



						if ($(data.input).attr('id') === 'home-loan-amount') {


							homeLoanAmount = data.from_pretty
						}
						if ($(data.input).attr('id') === 'home-loan-tenure') {
							homeLoanTenure = data.from_pretty
						}
						if ($(data.input).attr('id') === 'personal-loan-amount') {
							personalLoanAmount = data.from_pretty
						}
						if ($(data.input).attr('id') === 'personal-loan-tenure') {
							personalLoanTenure = data.from_pretty
						}
						if ($(data.input).attr('id') === 'auto-loan-amount') {
							autoLoanAmount = data.from_pretty
						}
						if ($(data.input).attr('id') === 'auto-loan-tenure') {
							autoLoanTenure = data.from_pretty
						}


						app._calculateLoan(homeLoanAmount, homeLoanTenure, parseFloat($('#home-loan-values').attr('data-interest')), $('#home-loan-values'))
						app._calculateLoan(personalLoanAmount, personalLoanTenure, parseFloat($('#personal-loan-values').attr('data-interest')), $('#personal-loan-values'))
						app._calculateLoan(autoLoanAmount, autoLoanTenure, parseFloat($('#auto-loan-values').attr('data-interest')), $('#auto-loan-values'))






					},

				});

			});


			$(".range-slider-100").ionRangeSlider({
				prettify_enabled: true,
				prettify_separator: ",",
				onChange: function (data) {



					if ($(data.input).attr('id') === 'home-loan-amount') {
						homeLoanAmount = data.from
					}
					if ($(data.input).attr('id') === 'home-loan-tenure') {
						homeLoanTenure = data.from
					}
					if ($(data.input).attr('id') === 'personal-loan-amount') {
						personalLoanAmount = data.from
					}
					if ($(data.input).attr('id') === 'personal-loan-tenure') {
						personalLoanTenure = data.from
					}
					if ($(data.input).attr('id') === 'auto-loan-amount') {
						autoLoanAmount = data.from
					}
					if ($(data.input).attr('id') === 'auto-loan-tenure') {
						autoLoanTenure = data.from
					}


					app._calculateLoan(homeLoanAmount, homeLoanTenure, parseFloat($('#home-loan-values').attr('data-interest')), $('#home-loan-values'))
					app._calculateLoan(personalLoanAmount, personalLoanTenure, parseFloat($('#personal-loan-values').attr('data-interest')), $('#personal-loan-values'))
					app._calculateLoan(autoLoanAmount, autoLoanTenure, parseFloat($('#auto-loan-values').attr('data-interest')), $('#auto-loan-values'))






				},
			});

		},



		random() {

		},

		_splitTextAnimation(elemClass, isWhiteSection) {
			var yourElement = document.getElementsByClassName(elemClass);
			var split = new SplitText(yourElement, {
				wordsClass: "splitted-words",
				type: "words"
			});
			var tl3 = gsap.timeline();
			tl3.to($(`.${elemClass} .splitted-words`), { color: "#ED5728", duration: 0.2, stagger: 0.10 });
			tl3.to($(`.${elemClass} .splitted-words`), { color: isWhiteSection ? "black" : "white", duration: 0.2, stagger: 0.10 }, '0.15');
		},

		animateTitles() {
			$('.animate-colors').each(function (index) {
				$(this).addClass(`animate-colors-${index + 1}`)
			})


			// Select the elements you want to observe
			const titles = document.querySelectorAll('.animate-colors');

			// Define the callback function that will be triggered when the elements come into view
			const observerCallback = (entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						app._splitTextAnimation(entry.target.classList[2], entry.target.classList.contains('white-section'))
						observer.unobserve(entry.target);
					}
				});
			};

			// Set up options for the observer (optional)
			const observerOptions = {
				root: null, // Use the viewport as the root
				rootMargin: app.isMobile ? '-150px' : '-300px', // Margin around the root
				threshold: 0.1 // Trigger the callback when 10% of the element is�in�view
			};

			// Create a new IntersectionObserver with the callback and options
			const observer = new IntersectionObserver(observerCallback, observerOptions);

			// Start observing each title element
			titles.forEach(title => observer.observe(title));
		},
		init() {
			app.detectCulture();
			// app.detectDevice();
			// app.resizeListner();
			// app.addEventListner();
			// app.lazyLoad();
			// app.swiper();
			// app.tabs();
			// app.customSelect();
			// app.random();
			// app.animateTitles()


		},
	}
	window.app = app;

}(jQuery));

$(document).ready(() => {
	window.app.init();
});