$wnd.gwtmaterialdemo.runAsyncCallback36("function IconsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(716, 53, $intern_55, IconsPresenter);\n_.onReveal = function onReveal_56(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Icons', 'We have included 740 Material Design Icons courtesy of Google. You can download them directly from the Material Design specs.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsPresenter', 716);\nfunction IconsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_17(new IconsView_BinderImpl$Widgets));\n}\n\ndefineClass(982, 56, $intern_56, IconsView);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView', 982);\nfunction IconsView_BinderImpl(){\n}\n\ndefineClass(1339, 1, {}, IconsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl', 1339);\nfunction $build_f_HTMLPanel2_2(this$static){\n  var __attachRecord__, f_HTMLPanel2, f_MaterialTitle3, f_MaterialIcon4, f_PrettyPre5, f_MaterialTitle6, f_MaterialRow7, f_PrettyPre20, f_MaterialTitle21, f_MaterialLink22, f_PrettyPre23, f_MaterialTitle24, f_Frame25, sb, f_MaterialColumn8, f_MaterialIcon9, f_MaterialLabel10, f_MaterialColumn11, f_MaterialIcon12, f_MaterialLabel13, f_MaterialColumn14, f_MaterialIcon15, f_MaterialLabel16, f_MaterialColumn17, f_MaterialIcon18, f_MaterialLabel19, sb_0, sb_1;\n  f_HTMLPanel2 = new HTMLPanel($html4_7(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Usage') , $setText_9(f_MaterialTitle3.paragraph, 'Using MaterialIcon Widget you can easily make it by adding the lines below. Just set the icon attribute and indicate which icon you want to display. Please refer below about the list of icon.') , f_MaterialTitle3), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialIcon4 = new MaterialIcon , $setIconType_3(f_MaterialIcon4, ($clinit_IconType() , ROTATION_3D)) , f_MaterialIcon4), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb = new StringBuilder , sb.string += '&lt;m:MaterialIcon iconType=\"ROTATION_3D\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre5.element, 'lang-xml', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Sizes') , $setText_9(f_MaterialTitle6.paragraph, 'To control the size of the icon, just set size attribute in your MaterialIcon widget.') , f_MaterialTitle6), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialRow7 = new MaterialRow , $add_12(f_MaterialRow7, (f_MaterialColumn8 = new MaterialColumn , $add_12(f_MaterialColumn8, (f_MaterialIcon9 = new MaterialIcon , $setIconSize_1(f_MaterialIcon9, ($clinit_IconSize() , TINY)) , $setIconType_3(f_MaterialIcon9, POLYMER) , f_MaterialIcon9)) , $add_12(f_MaterialColumn8, (f_MaterialLabel10 = new MaterialLabel , $setInnerHTML(f_MaterialLabel10.element, 'Tiny') , f_MaterialLabel10)) , setStyleName(f_MaterialColumn8.element, 'center-align', true) , $setGrid((!f_MaterialColumn8.gridMixin_0 && (f_MaterialColumn8.gridMixin_0 = new GridMixin(f_MaterialColumn8)) , f_MaterialColumn8.gridMixin_0), 's4 m2') , f_MaterialColumn8)) , $add_12(f_MaterialRow7, (f_MaterialColumn11 = new MaterialColumn , $add_12(f_MaterialColumn11, (f_MaterialIcon12 = new MaterialIcon , $setIconSize_1(f_MaterialIcon12, SMALL) , $setIconType_3(f_MaterialIcon12, POLYMER) , f_MaterialIcon12)) , $add_12(f_MaterialColumn11, (f_MaterialLabel13 = new MaterialLabel , $setInnerHTML(f_MaterialLabel13.element, 'Small') , f_MaterialLabel13)) , setStyleName(f_MaterialColumn11.element, 'center-align', true) , $setGrid((!f_MaterialColumn11.gridMixin_0 && (f_MaterialColumn11.gridMixin_0 = new GridMixin(f_MaterialColumn11)) , f_MaterialColumn11.gridMixin_0), 's4 m2') , f_MaterialColumn11)) , $add_12(f_MaterialRow7, (f_MaterialColumn14 = new MaterialColumn , $add_12(f_MaterialColumn14, (f_MaterialIcon15 = new MaterialIcon , $setIconSize_1(f_MaterialIcon15, MEDIUM_0) , $setIconType_3(f_MaterialIcon15, POLYMER) , f_MaterialIcon15)) , $add_12(f_MaterialColumn14, (f_MaterialLabel16 = new MaterialLabel , $setInnerHTML(f_MaterialLabel16.element, 'Medium') , f_MaterialLabel16)) , setStyleName(f_MaterialColumn14.element, 'center-align', true) , $setGrid((!f_MaterialColumn14.gridMixin_0 && (f_MaterialColumn14.gridMixin_0 = new GridMixin(f_MaterialColumn14)) , f_MaterialColumn14.gridMixin_0), 's4 m2') , f_MaterialColumn14)) , $add_12(f_MaterialRow7, (f_MaterialColumn17 = new MaterialColumn , $add_12(f_MaterialColumn17, (f_MaterialIcon18 = new MaterialIcon , $setIconSize_1(f_MaterialIcon18, LARGE_0) , $setIconType_3(f_MaterialIcon18, POLYMER) , f_MaterialIcon18)) , $add_12(f_MaterialColumn17, (f_MaterialLabel19 = new MaterialLabel , $setInnerHTML(f_MaterialLabel19.element, 'Large') , f_MaterialLabel19)) , setStyleName(f_MaterialColumn17.element, 'center-align', true) , $setGrid((!f_MaterialColumn17.gridMixin_0 && (f_MaterialColumn17.gridMixin_0 = new GridMixin(f_MaterialColumn17)) , f_MaterialColumn17.gridMixin_0), 's4 m2') , f_MaterialColumn17)) , setStyleName(f_MaterialRow7.element, 'valign-wrapper', true) , f_MaterialRow7), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_PrettyPre20 = new PrettyPre , $setHTML_0(f_PrettyPre20, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"TINY\" /&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"SMALL\" /&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"MEDIUM\" /&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"LARGE\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre20.element, 'lang-xml', true) , setStyleName(f_PrettyPre20.element, 'z-depth-1', true) , f_PrettyPre20), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle21 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle21.header), 'Icon inside MaterialLink') , $setText_9(f_MaterialTitle21.paragraph, 'You can add in your material link an icon instance by adding icon attribute') , f_MaterialTitle21), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialLink22 = new MaterialLink , $setIconPosition(f_MaterialLink22, ($clinit_IconPosition() , LEFT_6)) , f_MaterialLink22.span_1.setText('I love Material Design') , $add_12(f_MaterialLink22, f_MaterialLink22.span_1) , $setTextColor_0((!f_MaterialLink22.colorsMixin_0 && (f_MaterialLink22.colorsMixin_0 = new ColorsMixin(f_MaterialLink22)) , f_MaterialLink22.colorsMixin_0), 'red') , $setFontSize_0((!f_MaterialLink22.fontSizeMixin_0 && (f_MaterialLink22.fontSizeMixin_0 = new FontSizeMixin(f_MaterialLink22)) , f_MaterialLink22.fontSizeMixin_0), '2em') , $setIconType(f_MaterialLink22, FAVORITE) , f_MaterialLink22), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_PrettyPre23 = new PrettyPre , $setHTML_0(f_PrettyPre23, (sb_1 = new StringBuilder , sb_1.string += '&lt;m:MaterialLink fontSize=\"2em\" text=\"I love Material Design\" textColor=\"red\" iconType=\"FAVORITE\" iconPosition=\"LEFT\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre23.element, 'lang-xml', true) , setStyleName(f_PrettyPre23.element, 'z-depth-1', true) , f_PrettyPre23), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle24 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle24.header), 'Get Icons from Google Material Design') , f_MaterialTitle24), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel2, (f_Frame25 = new Frame_0 , $setStyleName_0(f_Frame25, ($build_style_4() , 'CA56RM-y-a'), true) , f_Frame25.element.style['height'] = '700px' , f_Frame25.element.style['width'] = '100%' , $setSrc(f_Frame25.element, 'https://www.google.com/design/icons/#ic_3d_rotation') , f_Frame25), $get_0(this$static.domId10Element));\n  return f_HTMLPanel2;\n}\n\nfunction $build_f_MaterialPanel1_17(this$static){\n  var f_MaterialPanel1;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_12(f_MaterialPanel1, $build_f_HTMLPanel2_2(this$static));\n  return f_MaterialPanel1;\n}\n\nfunction $build_style_4(){\n  var style;\n  style = (new IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_28);\n  $ensureInjected_33(style);\n  return style;\n}\n\nfunction IconsView_BinderImpl$Widgets(){\n  $build_style_4();\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n}\n\ndefineClass(1340, 1, {}, IconsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl/Widgets', 1340);\nfunction IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1704, 1, {}, IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_28;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1704);\nfunction $ensureInjected_33(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.CA56RM-y-a{border:1px solid #e9e9e9}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1705, 1, {}, IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_91(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1705);\nfunction $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_28 = new IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html4_7(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$) {\n    result = new IconsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$) {\n    result = new IconsView(new IconsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$;\n}\n\ndefineClass(646, 1, $intern_94);\n_.onSuccess_0 = function onSuccess_37(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(36);\n\n//# sourceURL=gwtmaterialdemo-36.js\n")
