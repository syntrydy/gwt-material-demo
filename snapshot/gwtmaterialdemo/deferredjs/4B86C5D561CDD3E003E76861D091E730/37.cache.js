$wnd.gwtmaterialdemo.runAsyncCallback37("function ShadowPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(717, 53, $intern_55, ShadowPresenter);\n_.onReveal = function onReveal_57(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Shadow', 'By importing another project called gwt-material-themes, you can now easily integrate it and make your app more professional with branding identity.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowPresenter', 717);\nfunction ShadowView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_18(new ShadowView_BinderImpl$Widgets));\n}\n\ndefineClass(983, 56, $intern_56, ShadowView);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView', 983);\nfunction ShadowView_BinderImpl(){\n}\n\ndefineClass(1341, 1, {}, ShadowView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl', 1341);\nfunction $build_f_MaterialPanel1_18(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_MaterialTitle3, f_MaterialRow4, f_PrettyPre10, f_MaterialTitle11, f_MaterialImage12, f_MaterialColumn5, f_MaterialColumn6, f_MaterialColumn7, f_MaterialColumn8, f_MaterialColumn9, sb;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_12(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html2_7(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element)) , $get_0(this$static.domId0Element) , $get_0(this$static.domId1Element) , $get_0(this$static.domId2Element) , $get_0(this$static.domId3Element) , $get_0(this$static.domId4Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Panels') , $setText_9(f_MaterialTitle3.paragraph, \"By adding shadow='1' to any material panel, material row, material column, material card, you can easily apply a shadow to that element\") , f_MaterialTitle3), $get_0(this$static.domId0Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialRow4 = new MaterialRow , $add_12(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , setStyleName(f_MaterialColumn5.element, 'CA56RM-z-a', true) , $setBackgroundColor_0((!f_MaterialColumn5.colorsMixin_0 && (f_MaterialColumn5.colorsMixin_0 = new ColorsMixin(f_MaterialColumn5)) , f_MaterialColumn5.colorsMixin_0), 'white') , $setShadow_0((!f_MaterialColumn5.shadowMixin && (f_MaterialColumn5.shadowMixin = new ShadowMixin(f_MaterialColumn5)) , f_MaterialColumn5.shadowMixin), 1) , $setWaves(f_MaterialColumn5, ($clinit_WavesType() , DEFAULT_7)) , $setGrid((!f_MaterialColumn5.gridMixin_0 && (f_MaterialColumn5.gridMixin_0 = new GridMixin(f_MaterialColumn5)) , f_MaterialColumn5.gridMixin_0), 's12 m12 l2') , f_MaterialColumn5)) , $add_12(f_MaterialRow4, (f_MaterialColumn6 = new MaterialColumn , setStyleName(f_MaterialColumn6.element, 'CA56RM-z-a', true) , $setBackgroundColor_0((!f_MaterialColumn6.colorsMixin_0 && (f_MaterialColumn6.colorsMixin_0 = new ColorsMixin(f_MaterialColumn6)) , f_MaterialColumn6.colorsMixin_0), 'white') , $setShadow_0((!f_MaterialColumn6.shadowMixin && (f_MaterialColumn6.shadowMixin = new ShadowMixin(f_MaterialColumn6)) , f_MaterialColumn6.shadowMixin), 2) , $setWaves(f_MaterialColumn6, RED) , $setGrid((!f_MaterialColumn6.gridMixin_0 && (f_MaterialColumn6.gridMixin_0 = new GridMixin(f_MaterialColumn6)) , f_MaterialColumn6.gridMixin_0), 's12 m12 l2') , f_MaterialColumn6)) , $add_12(f_MaterialRow4, (f_MaterialColumn7 = new MaterialColumn , setStyleName(f_MaterialColumn7.element, 'CA56RM-z-a', true) , $setBackgroundColor_0((!f_MaterialColumn7.colorsMixin_0 && (f_MaterialColumn7.colorsMixin_0 = new ColorsMixin(f_MaterialColumn7)) , f_MaterialColumn7.colorsMixin_0), 'white') , $setShadow_0((!f_MaterialColumn7.shadowMixin && (f_MaterialColumn7.shadowMixin = new ShadowMixin(f_MaterialColumn7)) , f_MaterialColumn7.shadowMixin), 3) , $setWaves(f_MaterialColumn7, TEAL) , $setGrid((!f_MaterialColumn7.gridMixin_0 && (f_MaterialColumn7.gridMixin_0 = new GridMixin(f_MaterialColumn7)) , f_MaterialColumn7.gridMixin_0), 's12 m12 l2') , f_MaterialColumn7)) , $add_12(f_MaterialRow4, (f_MaterialColumn8 = new MaterialColumn , setStyleName(f_MaterialColumn8.element, 'CA56RM-z-a', true) , $setBackgroundColor_0((!f_MaterialColumn8.colorsMixin_0 && (f_MaterialColumn8.colorsMixin_0 = new ColorsMixin(f_MaterialColumn8)) , f_MaterialColumn8.colorsMixin_0), 'white') , $setShadow_0((!f_MaterialColumn8.shadowMixin && (f_MaterialColumn8.shadowMixin = new ShadowMixin(f_MaterialColumn8)) , f_MaterialColumn8.shadowMixin), 4) , $setWaves(f_MaterialColumn8, YELLOW) , $setGrid((!f_MaterialColumn8.gridMixin_0 && (f_MaterialColumn8.gridMixin_0 = new GridMixin(f_MaterialColumn8)) , f_MaterialColumn8.gridMixin_0), 's12 m12 l2') , f_MaterialColumn8)) , $add_12(f_MaterialRow4, (f_MaterialColumn9 = new MaterialColumn , setStyleName(f_MaterialColumn9.element, 'CA56RM-z-a', true) , $setBackgroundColor_0((!f_MaterialColumn9.colorsMixin_0 && (f_MaterialColumn9.colorsMixin_0 = new ColorsMixin(f_MaterialColumn9)) , f_MaterialColumn9.colorsMixin_0), 'white') , $setShadow_0((!f_MaterialColumn9.shadowMixin && (f_MaterialColumn9.shadowMixin = new ShadowMixin(f_MaterialColumn9)) , f_MaterialColumn9.shadowMixin), 5) , $setWaves(f_MaterialColumn9, PURPLE) , $setGrid((!f_MaterialColumn9.gridMixin_0 && (f_MaterialColumn9.gridMixin_0 = new GridMixin(f_MaterialColumn9)) , f_MaterialColumn9.gridMixin_0), 's12 m12 l2') , f_MaterialColumn9)) , f_MaterialRow4), $get_0(this$static.domId1Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb = new StringBuilder , sb.string += '&lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"1\" waves=\"DEFAULT\"/&gt; &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"2\" waves=\"RED\"/&gt; &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"3\" waves=\"TEAL\"/&gt; &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"4\" waves=\"YELLOW\"/&gt; &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"5\" waves=\"PURPLE\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre10.element, 'lang-xml', true) , setStyleName(f_PrettyPre10.element, 'z-depth-1', true) , f_PrettyPre10), $get_0(this$static.domId2Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Any Material Elements') , $setText_9(f_MaterialTitle11.paragraph, \"You can directly add shadows on any material widgets by adding: addStyleNames='z-depth-1' to the ui binder widget.\") , f_MaterialTitle11), $get_0(this$static.domId3Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialImage12 = new MaterialImage , setStyleName(f_MaterialImage12.element, 'z-depth-1', true) , $setResource_1(f_MaterialImage12, (new MaterialResources_default_InlineClientBundleGenerator , $clinit_MaterialResources_default_InlineClientBundleGenerator$imageInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , image_0)) , f_MaterialImage12), $get_0(this$static.domId4Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction ShadowView_BinderImpl$Widgets(){\n  this.style_0 = (new ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_29);\n  $ensureInjected_34(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1342, 1, {}, ShadowView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl/Widgets', 1342);\nfunction ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1704, 1, {}, ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_29;\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1704);\nfunction $ensureInjected_34(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.CA56RM-z-a{height:200px;margin:2%}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1705, 1, {}, ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_92(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1705);\nfunction $clinit_ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_29 = new ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html2_7(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += '\\'><\\/span> <pre>\\n        &lt;m:MaterialImage resource=\"{res.image}\" addStyleNames=\"z-depth-1\"/&gt;\\n      <\\/pre>';\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$) {\n    result = new ShadowPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$) {\n    result = new ShadowView(new ShadowView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$;\n}\n\ndefineClass(648, 1, $intern_94);\n_.onSuccess_0 = function onSuccess_38(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(37);\n\n//# sourceURL=gwtmaterialdemo-37.js\n")
