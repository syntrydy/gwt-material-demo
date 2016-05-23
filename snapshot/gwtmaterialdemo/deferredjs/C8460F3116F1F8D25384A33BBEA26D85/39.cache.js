$wnd.gwtmaterialdemo.runAsyncCallback39("function TemplatesPresenter(eventBus, view, proxy){\n  $clinit_TemplatesPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(719, 53, $intern_55, TemplatesPresenter);\n_.onReveal = function onReveal_59(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Templates', 'Inspiring templates before starting designing / developing your GWT Apps with Material Design look and feel.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_templates_TemplatesPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesPresenter', 719);\nfunction TemplatesView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_3(new TemplatesView_BinderImpl$Widgets));\n}\n\ndefineClass(985, 56, $intern_56, TemplatesView);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView', 985);\nfunction TemplatesView_BinderImpl(){\n}\n\ndefineClass(1345, 1, {}, TemplatesView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView_BinderImpl', 1345);\nfunction $build_f_MaterialRow1_3(){\n  var f_MaterialRow1, f_MaterialColumn2, f_MaterialCard3, f_MaterialCardImage4, f_MaterialCardContent6, f_MaterialCardAction8, f_MaterialColumn11, f_MaterialCard12, f_MaterialCardImage13, f_MaterialCardContent15, f_MaterialCardAction17, f_MaterialImage5, f_MaterialCardTitle7, f_MaterialLink9, f_MaterialLink10, f_MaterialImage14, f_MaterialCardTitle16, f_MaterialLink18;\n  f_MaterialRow1 = new MaterialRow;\n  $add_12(f_MaterialRow1, (f_MaterialColumn2 = new MaterialColumn , $add_12(f_MaterialColumn2, (f_MaterialCard3 = new MaterialCard , $add_12(f_MaterialCard3, (f_MaterialCardImage4 = new MaterialCardImage , $add_19(f_MaterialCardImage4, (f_MaterialImage5 = new MaterialImage , $setResource_1(f_MaterialImage5, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , template_starter)) , f_MaterialImage5)) , $setWaves(f_MaterialCardImage4, ($clinit_WavesType() , LIGHT)) , f_MaterialCardImage4)) , $add_12(f_MaterialCard3, (f_MaterialCardContent6 = new MaterialCardContent , $add_12(f_MaterialCardContent6, (f_MaterialCardTitle7 = new MaterialCardTitle , f_MaterialCardTitle7.span_0.setText('Starter Template') , $add_12(f_MaterialCardTitle7, f_MaterialCardTitle7.span_0) , $setTextColor_0((!f_MaterialCardTitle7.colorsMixin_0 && (f_MaterialCardTitle7.colorsMixin_0 = new ColorsMixin(f_MaterialCardTitle7)) , f_MaterialCardTitle7.colorsMixin_0), 'black') , f_MaterialCardTitle7)) , f_MaterialCardContent6)) , $add_12(f_MaterialCard3, (f_MaterialCardAction8 = new MaterialCardAction , $add_12(f_MaterialCardAction8, (f_MaterialLink9 = new MaterialLink , f_MaterialLink9.span_1.setText('Demo') , $add_12(f_MaterialLink9, f_MaterialLink9.span_1) , $setAttribute(($clinit_DOM() , f_MaterialLink9.element), 'target', '_blank') , $setAttribute(f_MaterialLink9.element, 'href', 'http://gwtmaterialdesign.github.io/gwt-material-template/snapshot/') , f_MaterialLink9)) , $add_12(f_MaterialCardAction8, (f_MaterialLink10 = new MaterialLink , f_MaterialLink10.span_1.setText('Source') , $add_12(f_MaterialLink10, f_MaterialLink10.span_1) , $setAttribute(f_MaterialLink10.element, 'target', '_blank') , $setAttribute(f_MaterialLink10.element, 'href', 'https://github.com/GwtMaterialDesign/gwt-material-template') , f_MaterialLink10)) , f_MaterialCardAction8)) , $setBackgroundColor_0((!f_MaterialCard3.colorsMixin_0 && (f_MaterialCard3.colorsMixin_0 = new ColorsMixin(f_MaterialCard3)) , f_MaterialCard3.colorsMixin_0), 'white') , f_MaterialCard3)) , $setGrid((!f_MaterialColumn2.gridMixin_0 && (f_MaterialColumn2.gridMixin_0 = new GridMixin(f_MaterialColumn2)) , f_MaterialColumn2.gridMixin_0), 'l4') , f_MaterialColumn2));\n  $add_12(f_MaterialRow1, (f_MaterialColumn11 = new MaterialColumn , $add_12(f_MaterialColumn11, (f_MaterialCard12 = new MaterialCard , $add_12(f_MaterialCard12, (f_MaterialCardImage13 = new MaterialCardImage , $add_19(f_MaterialCardImage13, (f_MaterialImage14 = new MaterialImage , $setResource_1(f_MaterialImage14, ($clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer() , template_wrenx)) , f_MaterialImage14)) , $setWaves(f_MaterialCardImage13, LIGHT) , f_MaterialCardImage13)) , $add_12(f_MaterialCard12, (f_MaterialCardContent15 = new MaterialCardContent , $add_12(f_MaterialCardContent15, (f_MaterialCardTitle16 = new MaterialCardTitle , f_MaterialCardTitle16.span_0.setText('Map Template') , $add_12(f_MaterialCardTitle16, f_MaterialCardTitle16.span_0) , $setTextColor_0((!f_MaterialCardTitle16.colorsMixin_0 && (f_MaterialCardTitle16.colorsMixin_0 = new ColorsMixin(f_MaterialCardTitle16)) , f_MaterialCardTitle16.colorsMixin_0), 'black') , f_MaterialCardTitle16)) , f_MaterialCardContent15)) , $add_12(f_MaterialCard12, (f_MaterialCardAction17 = new MaterialCardAction , $add_12(f_MaterialCardAction17, (f_MaterialLink18 = new MaterialLink , f_MaterialLink18.span_1.setText('Demo') , $add_12(f_MaterialLink18, f_MaterialLink18.span_1) , $setAttribute(f_MaterialLink18.element, 'target', '_blank') , $setAttribute(f_MaterialLink18.element, 'href', 'http://wrenx2015.appspot.com/') , f_MaterialLink18)) , f_MaterialCardAction17)) , $setBackgroundColor_0((!f_MaterialCard12.colorsMixin_0 && (f_MaterialCard12.colorsMixin_0 = new ColorsMixin(f_MaterialCard12)) , f_MaterialCard12.colorsMixin_0), 'white') , f_MaterialCard12)) , $setGrid((!f_MaterialColumn11.gridMixin_0 && (f_MaterialColumn11.gridMixin_0 = new GridMixin(f_MaterialColumn11)) , f_MaterialColumn11.gridMixin_0), 'l4') , f_MaterialColumn11));\n  return f_MaterialRow1;\n}\n\nfunction TemplatesView_BinderImpl$Widgets(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator();\n}\n\ndefineClass(1346, 1, {}, TemplatesView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_templates_TemplatesView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.templates', 'TemplatesView_BinderImpl/Widgets', 1346);\nfunction $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$) {\n    result = new TemplatesPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$) {\n    result = new TemplatesView(new TemplatesView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$templates$TemplatesView$_annotation$$none$$;\n}\n\ndefineClass(652, 1, $intern_94);\n_.onSuccess_0 = function onSuccess_40(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$templates$TemplatesPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nvar template_starter, template_wrenx;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_starterInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator();\n  template_starter = new ImageResourcePrototype('template_starter', ($clinit_UriUtils() , new SafeUriString(externalImage25)), 427, 693);\n}\n\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$template_wrenxInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator();\n  template_wrenx = new ImageResourcePrototype('template_wrenx', ($clinit_UriUtils() , new SafeUriString(externalImage26)), 469, 681);\n}\n\n$entry(onLoad_0)(39);\n\n//# sourceURL=gwtmaterialdemo-39.js\n")
