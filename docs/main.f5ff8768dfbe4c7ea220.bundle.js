(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{331:function(module,exports,__webpack_require__){__webpack_require__(332),__webpack_require__(482),module.exports=__webpack_require__(483)},398:function(module,exports){},483:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(303);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(674)],module)}.call(this,__webpack_require__(484)(module))},52:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return parseMSASeq})),__webpack_require__.d(__webpack_exports__,"a",(function(){return colorScheme}));__webpack_require__(195),__webpack_require__(135),__webpack_require__(304);function parseMSASeq(text){var seq=new Map;return text.split("\n").forEach((function(line){if("#"!==line[0]){var t=line.split(" ");seq.get(t[0])?seq.set(t[0],seq.get(t[0])+t.slice(-1)[0]):seq.set(t[0],t.slice(-1)[0])}})),seq}var colorScheme={clustal:{G:"orange",P:"orange",S:"orange",T:"orange",H:"red",K:"red",R:"red",F:"blue",W:"blue",Y:"blue",I:"green",L:"green",M:"green",V:"green"},lesk:{G:"orange",A:"orange",S:"orange",T:"orange",C:"green",V:"green",I:"green",L:"green",P:"green",F:"green",Y:"green",M:"green",W:"green",N:"magenta",Q:"magenta",H:"magenta",D:"red",E:"red",K:"blue",R:"blue"},maeditor:{A:"lightgreen",G:"lightgreen",C:"green",D:"darkgreen",E:"darkgreen",N:"darkgreen",Q:"darkgreen",I:"blue",L:"blue",M:"blue",V:"blue",F:"#C8A2C8",W:"#C8A2C8",Y:"#C8A2C8",H:"darkblue",K:"orange",R:"orange",P:"pink",S:"red",T:"red"},cinema:{H:"blue",K:"blue",R:"blue",D:"red",E:"red",S:"green",T:"green",N:"green",Q:"green",A:"white",V:"white",L:"white",I:"white",M:"white",F:"magenta",W:"magenta",Y:"magenta",P:"brown",G:"brown",C:"yellow",B:"gray",Z:"gray",X:"gray","-":"white",".":"white"}}},674:function(module,exports,__webpack_require__){var map={"./MSA.stories.js":680,"./Tree-MSA.stories.js":681,"./Tree.stories.js":679};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=674},679:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TreeOfLifeExample",(function(){return TreeOfLifeExample})),__webpack_require__.d(__webpack_exports__,"TreeOfLifeExampleCircular",(function(){return TreeOfLifeExampleCircular}));var _home_runner_work_phylo_react_phylo_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_components_Tree__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),treeOfLife="(((((((((((((((((((Escherichia_coli_EDL933:0.00000,Escherichia_coli_O157_H7:0.00000)Escherichia_subclade:0.00044[96],((Escherichia_coli_O6:0.00000,Escherichia_coli_K12:0.00022)Escherichia_subclade:0.00022[76],(Shigella_flexneri_2a_2457T:0.00000,Shigella_flexneri_2a_301:0.00000)Shigella:0.00266[100])Enterobacteriaceae_subclade:0.00000[75])Enterobacteriaceae_subclade:0.00813[100],((Salmonella_enterica:0.00000,Salmonella_typhi:0.00000)Salmonella_subclade:0.00146[100],Salmonella_typhimurium:0.00075)Salmonella:0.00702[100])Enterobacteriaceae_subclade:0.03131[100],((Yersinia_pestis_Medievalis:0.00000,(Yersinia_pestis_KIM:0.00000,Yersinia_pestis_CO92:0.00000)Yersinia_subclade:0.00000[31])Yersinia:0.03398[100],Photorhabdus_luminescens:0.05076)Enterobacteriaceae_subclade:0.01182[61])Enterobacteriaceae_subclade:0.02183[98],((Blochmannia_floridanus:0.32481,Wigglesworthia_brevipalpis:0.35452)Enterobacteriaceae_subclade:0.08332[100],(Buchnera_aphidicola_Bp:0.27492,(Buchnera_aphidicola_APS:0.09535,Buchnera_aphidicola_Sg:0.10235)Buchnera_subclade:0.10140[100])Buchnera:0.06497[100])Enterobacteriaceae_subclade:0.15030[100])Enterobacteriaceae:0.02808[100],((Pasteurella_multocida:0.03441,Haemophilus_influenzae:0.03754)Pasteurellaceae_subclade:0.01571[94],Haemophilus_ducreyi:0.05333)Pasteurellaceae:0.07365[100])Gammaproteobacteria_subclade:0.03759[100],((((Vibrio_vulnificus_YJ016:0.00021,Vibrio_vulnificus_CMCP6:0.00291)Vibrio_subclade:0.01212[100],Vibrio_parahaemolyticus:0.01985)Vibrio_subclade:0.01536[100],Vibrio_cholerae:0.02995)Vibrio:0.02661[100],Photobacterium_profundum:0.06131)Vibrionaceae:0.05597[100])Gammaproteobacteria_subclade:0.03492[81],Shewanella_oneidensis:0.10577)Gammaproteobacteria_subclade:0.12234[100],((Pseudomonas_putida:0.02741,Pseudomonas_syringae:0.03162)Pseudomonas_subclade:0.02904[100],Pseudomonas_aeruginosa:0.03202)Pseudomonas:0.14456[100])Gammaproteobacteria_subclade:0.04492[98],((Xylella_fastidiosa_700964:0.01324,Xylella_fastidiosa_9a5c:0.00802)Xylella:0.10192[100],(Xanthomonas_axonopodis:0.01069,Xanthomonas_campestris:0.00934)Xanthomonas:0.05037[100])Xanthomonadaceae:0.24151[100])Gammaproteobacteria_subclade:0.02475[49],Coxiella_burnetii:0.33185)Gammaproteobacteria:0.03328[54],((((Neisseria_meningitidis_A:0.00400,Neisseria_meningitidis_B:0.00134)Neisseria:0.12615[100],Chromobacterium_violaceum:0.09623)Neisseriaceae:0.07131[100],((Bordetella_pertussis:0.00127,(Bordetella_parapertussis:0.00199,Bordetella_bronchiseptica:0.00022)Bordetella_subclade:0.00006[67])Bordetella:0.14218[100],Ralstonia_solanacearum:0.11464)Burkholderiales:0.08478[100])Betaproteobacteria_subclade:0.03840[75],Nitrosomonas_europaea:0.22059)Betaproteobacteria:0.08761[100])Proteobacteria_subclade:0.16913[100],((((((Agrobacterium_tumefaciens_Cereon:0.00000,Agrobacterium_tumefaciens_WashU:0.00000):0.05735[100],Rhizobium_meliloti:0.05114)Sinorhizobium:0.05575[100],((Brucella_suis:0.00102,Brucella_melitensis:0.00184)Brucella:0.08660[100],Rhizobium_loti:0.09308)Rhizobiales_subclade:0.02384[51])Rhizobiales_subclade:0.08637[100],(Rhodopseudomonas_palustris:0.04182,Bradyrhizobium_japonicum:0.06346)Bradyrhizobiaceae:0.14122[100])Rhizobiales:0.05767[100],Caulobacter_crescentus:0.23943)Alphaproteobacteria_subclade:0.11257[100],(Wolbachia_sp._wMel:0.51596,(Rickettsia_prowazekii:0.04245,Rickettsia_conorii:0.02487)Rickettsia:0.38019[100])Rickettsiaceae:0.12058[100])Alphaproteobacteria:0.12365[100])Proteobacteria_subclade:0.06301[100],((((Helicobacter_pylori_J99:0.00897,Helicobacter_pylori_26695:0.00637)Helicobacter_subclade:0.19055[100],Helicobacter_hepaticus:0.12643)Helicobacter:0.05330[100],Wolinella_succinogenes:0.11644)Helicobacteraceae:0.09105[100],Campylobacter_jejuni:0.20399)Campylobacterales:0.41390[100])Proteobacteria_subclade:0.04428[82],((Desulfovibrio_vulgaris:0.38320,(Geobacter_sulfurreducens:0.22491,Bdellovibrio_bacteriovorus:0.45934)Deltaproteobacteria_subclade:0.04870[43])Deltaproteobacteria:0.04100[69],(Acidobacterium_capsulatum:0.24572,Solibacter_usitatus:0.29086)Acidobacteria:0.20514[100])Bacteria_subclade:0.04214[64])Bacteria_subclade:0.05551[98],((Fusobacterium_nucleatum:0.45615,(Aquifex_aeolicus:0.40986,Thermotoga_maritima:0.34182)Bacteria_subclade:0.07696[100])Bacteria_subclade:0.03606[35],(((Thermus_thermophilus:0.26583,Deinococcus_radiodurans:0.29763)Deinococci:0.24776[100],Dehalococcoides_ethenogenes:0.53988)Bacteria_subclade:0.04370[35],((((Nostoc_sp._PCC_7120:0.12014,Synechocystis_sp._PCC6803:0.15652)Cyanobacteria_subclade:0.04331[98],Synechococcus_elongatus:0.13147)Cyanobacteria_subclade:0.05040[100],(((Synechococcus_sp._WH8102:0.06780,Prochlorococcus_marinus_MIT9313:0.05434)Cyanobacteria_subclade:0.04879[100],Prochlorococcus_marinus_SS120:0.10211)Cyanobacteria_subclade:0.04238[74],Prochlorococcus_marinus_CCMP1378:0.16170)Cyanobacteria_subclade:0.20442[100])Cyanobacteria_subclade:0.07646[100],Gloeobacter_violaceus:0.23764)Cyanobacteria:0.24501[100])Bacteria_subclade:0.04332[39])Bacteria_subclade:0.02720[51])Bacteria_subclade:0.03471[74],((((Gemmata_obscuriglobus:0.36751,Rhodopirellula_baltica:0.38017)Planctomycetaceae:0.24062[100],((Leptospira_interrogans_L1-130:0.00000,Leptospira_interrogans_56601:0.00027)Leptospira:0.47573[100],((Treponema_pallidum:0.25544,Treponema_denticola:0.16072)Treponema:0.19057[100],Borrelia_burgdorferi:0.42323)Spirochaetaceae:0.20278[100])Spirochaetales:0.07248[95])Bacteria_subclade:0.04615[42],(((Tropheryma_whipplei_TW08/27:0.00009,Tropheryma_whipplei_Twist:0.00081)Tropheryma:0.44723[100],Bifidobacterium_longum:0.29283)Actinobacteridae_subclade:0.14429[100],(((((Corynebacterium_glutamicum_13032:0.00022,Corynebacterium_glutamicum:0.00000)Corynebacterium_subclade:0.03415[100],Corynebacterium_efficiens:0.02559)Corynebacterium_subclade:0.03682[100],Corynebacterium_diphtheriae:0.06479)Corynebacterium:0.13907[100],(((Mycobacterium_bovis:0.00067,(Mycobacterium_tuberculosis_CDC1551:0.00000,Mycobacterium_tuberculosis_H37Rv:0.00000)Mycobacterium_subclade:0.00022[98])Mycobacterium_subclade:0.03027[100],Mycobacterium_leprae:0.05135)Mycobacterium_subclade:0.01514[97],Mycobacterium_paratuberculosis:0.02091)Mycobacterium:0.11523[100])Corynebacterineae:0.09883[100],(Streptomyces_avermitilis:0.02680,Streptomyces_coelicolor:0.02678)Streptomyces:0.16707[100])Actinomycetales_subclade:0.06110[91])Actinobacteridae:0.26800[100])Bacteria_subclade:0.03480[23],((Fibrobacter_succinogenes:0.51984,(Chlorobium_tepidum:0.37204,(Porphyromonas_gingivalis:0.11304,Bacteroides_thetaiotaomicron:0.13145)Bacteroidales:0.34694[100])Bacteroidetes/Chlorobi_group:0.09237[100])Bacteria_subclade:0.04841[62],(((Chlamydophila_pneumoniae_TW183:0.00000,(Chlamydia_pneumoniae_J138:0.00000,(Chlamydia_pneumoniae_CWL029:0.00000,Chlamydia_pneumoniae_AR39:0.00000)Chlamydophila_subclade:0.00000[37])Chlamydophila_subclade:0.00000[44])Chlamydophila_subclade:0.10482[100],Chlamydophila_caviae:0.05903)Chlamydophila:0.04170[98],(Chlamydia_muridarum:0.01938,Chlamydia_trachomatis:0.02643)Chlamydia:0.06809[100])Chlamydiaceae:0.60169[100])Bacteria_subclade:0.04443[32])Bacteria_subclade:0.04284[67])Bacteria_subclade:0.02646[66],((Thermoanaerobacter_tengcongensis:0.17512,((Clostridium_tetani:0.10918,Clostridium_perfringens:0.11535)Clostridium_subclade:0.03238[78],Clostridium_acetobutylicum:0.11396)Clostridium:0.15056[100])Clostridia:0.11788[100],(((((Mycoplasma_mobile:0.27702,Mycoplasma_pulmonis:0.28761)Mycoplasma_subclade:0.28466[100],((((Mycoplasma_pneumoniae:0.10966,Mycoplasma_genitalium:0.11268)Mycoplasma_subclade:0.31768[100],Mycoplasma_gallisepticum:0.24373)Mycoplasma_subclade:0.14180[100],Mycoplasma_penetrans:0.34890)Mycoplasma_subclade:0.06674[94],Ureaplasma_parvum:0.33874)Mycoplasmataceae_subclade:0.19177[100])Mycoplasmataceae_subclade:0.07341[100],Mycoplasma_mycoides:0.37680)Mycoplasmataceae:0.12541[100],Phytoplasma_Onion_yellows:0.47843)Mollicutes:0.09099[100],(((((Listeria_monocytogenes_F2365:0.00063,Listeria_monocytogenes_EGD:0.00144)Listeria_subclade:0.00235[90],Listeria_innocua:0.00248)Listeria:0.13517[100],((Oceanobacillus_iheyensis:0.13838,Bacillus_halodurans:0.09280)Bacillaceae_subclade:0.02676[91],(((Bacillus_cereus_ATCC_14579:0.00342,Bacillus_cereus_ATCC_10987:0.00123)Bacillus_subclade:0.00573[100],Bacillus_anthracis:0.00331)Bacillus_subclade:0.08924[100],Bacillus_subtilis:0.07876)Bacillus:0.01984[96])Bacillaceae:0.03907[100])Bacillales_subclade:0.02816[69],((Staphylococcus_aureus_MW2:0.00000,(Staphylococcus_aureus_N315:0.00022,Staphylococcus_aureus_Mu50:0.00022)Staphylococcus_subclade:0.00022[61])Staphylococcus_subclade:0.02479[100],Staphylococcus_epidermidis:0.03246)Staphylococcus:0.17366[100])Bacillales:0.02828[64],(((((((Streptococcus_agalactiae_III:0.00110,Streptococcus_agalactiae_V:0.00155)Streptococcus_subclade:0.01637[100],(Streptococcus_pyogenes_M1:0.00134,(Streptococcus_pyogenes_MGAS8232:0.00045,(Streptococcus_pyogenes_MGAS315:0.00000,Streptococcus_pyogenes_SSI-1:0.00022)Streptococcus_subclade:0.00110[100])Streptococcus_subclade:0.00066[87])Streptococcus_subclade:0.02250[100])Streptococcus_subclade:0.01360[100],Streptococcus_mutans:0.04319)Streptococcus_subclade:0.01920[99],(Streptococcus_pneumoniae_R6:0.00119,Streptococcus_pneumoniae_TIGR4:0.00124)Streptococcus_subclade:0.03607[100])Streptococcus:0.04983[100],Lactococcus_lactis:0.11214)Streptococcaceae:0.08901[100],Enterococcus_faecalis:0.07946)Lactobacillales_subclade:0.03958[100],(Lactobacillus_johnsonii:0.20999,Lactobacillus_plantarum:0.14371)Lactobacillus:0.06763[100])Lactobacillales:0.08989[100])Bacilli:0.08905[100])Firmicutes_subclade:0.09540[92])Firmicutes:0.04315[54])Bacteria:1.34959,(((((Thalassiosira_pseudonana:0.33483,(Cryptosporidium_hominis:0.25048,Plasmodium_falciparum:0.28267)Apicomplexa:0.14359[100])Eukaryota_subclade:0.03495[42],(((Oryza_sativa:0.07623,Arabidopsis_thaliana:0.09366)Streptophyta:0.15770[100],Cyanidioschyzon_merolae:0.38319)Eukaryota_subclade:0.08133[96],(Dictyostelium_discoideum:0.34685,(((Eremothecium_gossypii:0.07298,Saccharomyces_cerevisiae:0.07619)Saccharomycetaceae:0.21170[100],Schizosaccharomyces_pombe:0.24665)Ascomycota:0.15370[100],(((Anopheles_gambiae:0.10724,Drosophila_melanogaster:0.10233)Diptera:0.09870[100],((Takifugu_rubripes:0.03142,Danio_rerio:0.05230)Actinopterygii:0.04335[100],(((Rattus_norvegicus:0.03107,Mus_musculus:0.01651)Murinae:0.00398[91],(Homo_sapiens:0.00957,Pan_troglodytes:0.03864)Hominidae:0.01549[100])Euarchontoglires:0.01629[99],Gallus_gallus:0.04596)Gnathostomata_subclade:0.01859[100])Gnathostomata:0.09688[100])Metazoa_subclade:0.03693[95],(Caenorhabditis_elegans:0.01843,Caenorhabditis_briggsae:0.01896)Caenorhabditis:0.24324[100])Metazoa:0.09911[100])Eukaryota_subclade:0.04004[85])Eukaryota_subclade:0.02708[41])Eukaryota_subclade:0.02636[44])Eukaryota_subclade:0.06455[87],Leishmania_major:0.45664)Eukaryota_subclade:0.10129[100],Giardia_lamblia:0.55482)Eukaryota:0.57543[100],((Nanoarchaeum_equitans:0.81078,(((Sulfolobus_tokodaii:0.17389,Sulfolobus_solfataricus:0.18962)Sulfolobus:0.33720[100],Aeropyrum_pernix:0.43380)Thermoprotei_subclade:0.09462[94],Pyrobaculum_aerophilum:0.55514)Thermoprotei:0.12018[100])Archaea_subclade:0.15444[100],((Thermoplasma_volcanium:0.10412,Thermoplasma_acidophilum:0.09785)Thermoplasma:0.66151[100],((((Methanobacterium_thermautotrophicum:0.36583,Methanopyrus_kandleri:0.35331)Euryarchaeota_subclade:0.07446[99],(Methanococcus_maripaludis:0.28592,Methanococcus_jannaschii:0.13226)Methanococcales:0.23828[100])Euryarchaeota_subclade:0.06284[100],((Pyrococcus_horikoshii:0.02786,Pyrococcus_abyssi:0.02179)Pyrococcus_subclade:0.02239[100],Pyrococcus_furiosus:0.02366)Pyrococcus:0.36220[100])Euryarchaeota_subclade:0.04469[51],(Archaeoglobus_fulgidus:0.34660,(Halobacterium_sp._NRC-1:0.61597,(Methanosarcina_acetivorans:0.02602,Methanosarcina_mazei:0.03087)Methanosarcina:0.30588[100])Euryarchaeota_subclade:0.12801[100])Euryarchaeota_subclade:0.10395[100])Euryarchaeota_subclade:0.06815[62])Euryarchaeota:0.11833[99])Archaea:0.43325[100]):0.88776);";__webpack_exports__.default={title:"Tree"};var TreeOfLifeExample=function TreeOfLifeExample(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState2=Object(_home_runner_work_phylo_react_phylo_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{for:"branchlen"},"Show branch length"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"checkbox",id:"branchlen",checked:value,onChange:function onChange(){return setValue(!value)}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tree__WEBPACK_IMPORTED_MODULE_2__.a,{data:treeOfLife,clickName:function clickName(d){console.log(d)},getConfig:function getConfig(d){console.log(d)},showBranchLength:value}))},TreeOfLifeExampleCircular=function TreeOfLifeExampleCircular(){var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState4=Object(_home_runner_work_phylo_react_phylo_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),value=_useState4[0],setValue=_useState4[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",{for:"branchlen"},"Show branch length"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"checkbox",id:"branchlen",checked:value,onChange:function onChange(){return setValue(!value)}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tree__WEBPACK_IMPORTED_MODULE_2__.a,{data:treeOfLife,clickName:function clickName(d){console.log(d)},getConfig:function getConfig(d){console.log(d)},showBranchLength:value,layout:"circular"}))};TreeOfLifeExample.__docgenInfo={description:"",methods:[],displayName:"TreeOfLifeExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tree.stories.js"]={name:"TreeOfLifeExample",docgenInfo:TreeOfLifeExample.__docgenInfo,path:"src/stories/Tree.stories.js"}),TreeOfLifeExampleCircular.__docgenInfo={description:"",methods:[],displayName:"TreeOfLifeExampleCircular"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tree.stories.js"]={name:"TreeOfLifeExampleCircular",docgenInfo:TreeOfLifeExampleCircular.__docgenInfo,path:"src/stories/Tree.stories.js"})},680:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleMSA",(function(){return MSA_stories_SimpleMSA})),__webpack_require__.d(__webpack_exports__,"BGColoredMSA",(function(){return MSA_stories_BGColoredMSA}));var react=__webpack_require__(1),react_default=__webpack_require__.n(react),d3=__webpack_require__(18),Utils=__webpack_require__(52);function MSA(props){var dataToShow=props.dataToShow,data=props.data,heightoftree=props.heightoftree,bgColor=props.bgColor;return Object(react.useEffect)((function(){var seqMap=Object(Utils.b)(data);d3.f("#metadata > *").remove();var svg=d3.e("#metadata").attr("width",1e3).attr("height",heightoftree).attr("font-family","sans-serif").attr("font-size",10);dataToShow.forEach((function(d){for(var x=d.x,stri=seqMap.get(d.name)?seqMap.get(d.name):"",i=0;i<stri.length;i++)bgColor?(svg.append("rect").attr("x",10+16*i).attr("y",x-10).attr("width",16).attr("height",20).style("fill",Utils.a.maeditor[stri[i]]),svg.append("text").style("font-family","monospace").attr("x",10+16*i+8-3).attr("y",x+4).style("fill","white").text(stri[i])):svg.append("text").style("font-family","monospace").attr("x",10+16*i+8-3).attr("y",x+4).style("fill",Utils.a.maeditor[stri[i]]).text(stri[i])}))}),[dataToShow,heightoftree,data,bgColor]),react_default.a.createElement("svg",{id:"metadata"})}MSA.defaultProps={data:"",dataToShow:null,heightoftree:null,bgColor:!1},MSA.__docgenInfo={description:"",methods:[],displayName:"MSA",props:{data:{defaultValue:{value:"''",computed:!1},required:!1},dataToShow:{defaultValue:{value:"null",computed:!1},required:!1},heightoftree:{defaultValue:{value:"null",computed:!1},required:!1},bgColor:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MSA.js"]={name:"MSA",docgenInfo:MSA.__docgenInfo,path:"src/components/MSA.js"});var temptree=[{name:"UniProt/Swiss-Prot|P36835|IL2_CAPHI",x:10,y:333},{name:"UniProt/Swiss-Prot|Q8BZM1|GLMN_MOUSE",x:30,y:333},{name:"UniProt/Swiss-Prot|Q7JFM4|IL2_AOTVO",x:50,y:333},{name:"UniProt/Swiss-Prot|P26896|IL2RB_RAT",x:70,y:333},{name:"UniProt/Swiss-Prot|Q29416|IL2_CANFA",x:90,y:333},{name:"UniProt/Swiss-Prot|Q95118|IL2RG_BOVIN",x:110,y:333},{name:"UniProt/Swiss-Prot|P40321|IL2RG_CANFA",x:130,y:333},{name:"UniProt/Swiss-Prot|P01590|IL2RA_MOUSE",x:150,y:333},{name:"UniProt/Swiss-Prot|P26898|IL2RA_SHEEP",x:170,y:333},{name:"UniProt/Swiss-Prot|P41690|IL2RA_FELCA",x:190,y:333},{name:"UniProt/Swiss-Prot|Q5MNY4|IL2RA_MACMU",x:210,y:333},{name:"UniProt/Swiss-Prot|P01589|IL2RA_HUMAN",x:230,y:333}],temptreeSeq="\n#CLUSTAL O(1.2.3) multiple sequence alignment\nUniProt/Swiss-Prot|P26898|IL2RA_SHEEP      MEPSLLMWRFFVFIVVPGCVTEACHDDPPSLRNA----------MFKVLRYE----VGTM\nUniProt/Swiss-Prot|P01590|IL2RA_MOUSE      MEPRLLMLGFLSLTIVPSCRAELCLYDPPEVPNA----------TFKALSYK----NGTI\nUniProt/Swiss-Prot|P41690|IL2RA_FELCA      MEPSLLLWGILTFVVVHGHVTELCDENPPDIQHA----------TFKALTYK----TGTM\nUniProt/Swiss-Prot|P01589|IL2RA_HUMAN      MDSYLLMWGLLTFIMVPGCQAELCDDDPPEIPHA----------TFKAMAYK----EGTM\nUniProt/Swiss-Prot|Q5MNY4|IL2RA_MACMU      MDPYLLMWGLLTFITVPGCQAELCDDDPPKITHA----------TFKAVAYK----EGTM\nUniProt/Swiss-Prot|Q95118|IL2RG_BOVIN      -----------------------------------LLMWGLLT-----------------\nUniProt/Swiss-Prot|P40321|IL2RG_CANFA      MLKPPLPLRSLLFLQLSLLGVGLNSTVPMPNGNEDIT------PDFFLTATPSETLSVSS\nUniProt/Swiss-Prot|P26896|IL2RB_RAT        MATVDLSWRLPLYILLLLLATT--------------------------------WVSAAV\nUniProt/Swiss-Prot|Q8BZM1|GLMN_MOUSE       PLPLRSLLFLQLPLLGVGLNP------------------PLPLRSLLFLQLPLLGVGLNP\nUniProt/Swiss-Prot|P36835|IL2_CAPHI        -----------LLGVGLNPKFLTP------------------------------------\nUniProt/Swiss-Prot|Q7JFM4|IL2_AOTVO        MLKPPLPLRSLLFLQLPLLGVGLNPKFLTPSGNEDIGGKPGTGGDFFLTSTPAGTLDVST\nUniProt/Swiss-Prot|Q29416|IL2_CANFA        --------------LFLQLSLLG-------------------------------------\n",MSA_stories_SimpleMSA=(__webpack_exports__.default={title:"MSA"},function SimpleMSA(){return react_default.a.createElement(MSA,{data:temptreeSeq,heigtoftree:240,dataToShow:temptree})}),MSA_stories_BGColoredMSA=function BGColoredMSA(){return react_default.a.createElement(MSA,{data:temptreeSeq,heigtoftree:240,dataToShow:temptree,bgColor:!0})};MSA_stories_SimpleMSA.__docgenInfo={description:"",methods:[],displayName:"SimpleMSA"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/MSA.stories.js"]={name:"SimpleMSA",docgenInfo:MSA_stories_SimpleMSA.__docgenInfo,path:"src/stories/MSA.stories.js"}),MSA_stories_BGColoredMSA.__docgenInfo={description:"",methods:[],displayName:"BGColoredMSA"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/MSA.stories.js"]={name:"BGColoredMSA",docgenInfo:MSA_stories_BGColoredMSA.__docgenInfo,path:"src/stories/MSA.stories.js"})},681:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TreeMSA",(function(){return Tree_MSA_stories_TreeMSA}));var slicedToArray=__webpack_require__(98),react=__webpack_require__(1),react_default=__webpack_require__.n(react),d3=__webpack_require__(18),Utils=__webpack_require__(52);function MSAsvg(props){var dataToShow=props.dataToShow,data=props.data,heightoftree=props.heightoftree,bgColor=props.bgColor;return Object(react.useEffect)((function(){var seqMap=Object(Utils.b)(data);d3.f("#metadata > *").remove();var svg=d3.e("#metadata").attr("width",dataToShow.length>0?function calcWidth(stri){return stri.length<1e3?16*stri.length+10:6*stri.length+12}(seqMap.get(dataToShow[0].name)):1e3).attr("height",heightoftree).attr("font-family","sans-serif").attr("font-size",10);(seqMap.get(dataToShow[0].name)?seqMap.get(dataToShow[0].name):"").length>1e3?dataToShow.forEach((function(d){var stri=seqMap.get(d.name)?seqMap.get(d.name):"",x=d.x;svg.append("text").style("font-family","monospace").attr("x",10).attr("y",x+4).text(stri)})):dataToShow.forEach((function(d){for(var stri=seqMap.get(d.name)?seqMap.get(d.name):"",x=d.x,i=0;i<stri.length;i++)bgColor?(svg.append("rect").attr("x",10+16*i).attr("y",x-10).attr("width",16).attr("height",20).style("fill",Utils.a.maeditor[stri[i]]),svg.append("text").style("font-family","monospace").attr("x",10+16*i+8-3).attr("y",x+4).style("fill","white").text(stri[i])):svg.append("text").style("font-family","monospace").attr("x",10+16*i+8-3).attr("y",x+4).style("fill",Utils.a.maeditor[stri[i]]).text(stri[i])}))}),[dataToShow,heightoftree,bgColor,data]),react_default.a.createElement("svg",{id:"metadata"})}MSAsvg.defaultProps={data:"",dataToShow:null,heightoftree:null,bgColor:!0},MSAsvg.__docgenInfo={description:"",methods:[],displayName:"MSAsvg",props:{data:{defaultValue:{value:"''",computed:!1},required:!1},dataToShow:{defaultValue:{value:"null",computed:!1},required:!1},heightoftree:{defaultValue:{value:"null",computed:!1},required:!1},bgColor:{defaultValue:{value:"true",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MSAsvg.js"]={name:"MSAsvg",docgenInfo:MSAsvg.__docgenInfo,path:"src/components/MSAsvg.js"});var Tree=__webpack_require__(99),makeStyles=__webpack_require__(694),Grid=__webpack_require__(697),Box=__webpack_require__(695),useStyles=Object(makeStyles.a)((function(theme){return{tree_div:{display:"flex",flexDirection:"row",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)",width:"calc(100vw - 32px)"}}})),Tree_MSA_stories_TreeMSA=(__webpack_exports__.default={title:"Tree MSA"},function TreeMSA(){var _useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),treeresponse=_useState2[0],setTreeresponse=_useState2[1],classes=useStyles();return react_default.a.createElement(Grid.a,{key:1,item:!0},react_default.a.createElement("div",{className:classes.tree_div},react_default.a.createElement(Box.a,{width:"20%"},react_default.a.createElement(Tree.a,{data:"(((UniProt/Swiss-Prot|P26898|IL2RA_SHEEP:0.24036,(UniProt/Swiss-Prot|P41690|IL2RA_FELCA:0.17737,(UniProt/Swiss-Prot|P01589|IL2RA_HUMAN:0.03906,UniProt/Swiss-Prot|Q5MNY4|IL2RA_MACMU:0.03787):0.13033):0.04964):0.02189,UniProt/Swiss-Prot|P01590|IL2RA_MOUSE:0.23072):0.06814,(((UniProt/Swiss-Prot|Q95118|IL2RG_BOVIN:0.09600,UniProt/Swiss-Prot|P40321|IL2RG_CANFA:0.09845):0.25333,UniProt/Swiss-Prot|Q29416|IL2_CANFA:-0.35055):0.10231,(UniProt/Swiss-Prot|P26896|IL2RB_RAT:0.33631,UniProt/Swiss-Prot|Q7JFM4|IL2_AOTVO:-0.33631):0.10166):0.01607,(UniProt/Swiss-Prot|Q8BZM1|GLMN_MOUSE:0.32378,UniProt/Swiss-Prot|P36835|IL2_CAPHI:-0.32378):0.09999)",layout:"linear",getConfig:null===treeresponse?setTreeresponse:function(d){}})),react_default.a.createElement(Box.a,{width:"80%",style:{overflowX:"scroll"}},null!==treeresponse?react_default.a.createElement(MSAsvg,{data:"\n#CLUSTAL O(1.2.3) multiple sequence alignment\nUniProt/Swiss-Prot|P26898|IL2RA_SHEEP      MEPSLLMWRFFVFIVVPGCVTEACHDDPPSLRNA----------MFKVLRYE----VGTM\nUniProt/Swiss-Prot|P01590|IL2RA_MOUSE      MEPRLLMLGFLSLTIVPSCRAELCLYDPPEVPNA----------TFKALSYK----NGTI\nUniProt/Swiss-Prot|P41690|IL2RA_FELCA      MEPSLLLWGILTFVVVHGHVTELCDENPPDIQHA----------TFKALTYK----TGTM\nUniProt/Swiss-Prot|P01589|IL2RA_HUMAN      MDSYLLMWGLLTFIMVPGCQAELCDDDPPEIPHA----------TFKAMAYK----EGTM\nUniProt/Swiss-Prot|Q5MNY4|IL2RA_MACMU      MDPYLLMWGLLTFITVPGCQAELCDDDPPKITHA----------TFKAVAYK----EGTM\nUniProt/Swiss-Prot|Q95118|IL2RG_BOVIN      -----------------------------------LLMWGLLT-----------------\nUniProt/Swiss-Prot|P40321|IL2RG_CANFA      MLKPPLPLRSLLFLQLSLLGVGLNSTVPMPNGNEDIT------PDFFLTATPSETLSVSS\nUniProt/Swiss-Prot|P26896|IL2RB_RAT        MATVDLSWRLPLYILLLLLATT--------------------------------WVSAAV\nUniProt/Swiss-Prot|Q8BZM1|GLMN_MOUSE       PLPLRSLLFLQLPLLGVGLNP------------------PLPLRSLLFLQLPLLGVGLNP\nUniProt/Swiss-Prot|P36835|IL2_CAPHI        -----------LLGVGLNPKFLTP------------------------------------\nUniProt/Swiss-Prot|Q7JFM4|IL2_AOTVO        MLKPPLPLRSLLFLQLPLLGVGLNPKFLTPSGNEDIGGKPGTGGDFFLTSTPAGTLDVST\nUniProt/Swiss-Prot|Q29416|IL2_CANFA        --------------LFLQLSLLG-------------------------------------\n",heightoftree:treeresponse.treeheight,dataToShow:treeresponse.leafloc}):null)))});Tree_MSA_stories_TreeMSA.__docgenInfo={description:"",methods:[],displayName:"TreeMSA"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tree-MSA.stories.js"]={name:"TreeMSA",docgenInfo:Tree_MSA_stories_TreeMSA.__docgenInfo,path:"src/stories/Tree-MSA.stories.js"})},99:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Tree}));var react=__webpack_require__(1),react_default=__webpack_require__.n(react),d3=__webpack_require__(18);function maxLength(d){return d.data.length+(d.children?d3.d(d.children,maxLength):0)}function Tree(props){var data=props.data,_props$clickName=props.clickName,clickName=void 0===_props$clickName?function(){}:_props$clickName,_props$getConfig=props.getConfig,getConfig=void 0===_props$getConfig?function(){}:_props$getConfig,showBranchLength=props.showBranchLength,layout=props.layout,ref=Object(react.useRef)(),tree=function parse(s){for(var ancestors=[],tree={},tokens=s.split(/\s*(;|\(|\)|,|:)\s*/),i=0;i<tokens.length;i++){var token=tokens[i],subtree={};switch(token){case"(":tree.branchset=[subtree],ancestors.push(tree),tree=subtree;break;case",":ancestors[ancestors.length-1].branchset.push(subtree),tree=subtree;break;case")":tree=ancestors.pop();break;case":":break;default:var x=tokens[i-1];")"===x||"("===x||","===x?tree.name=token:":"===x&&(tree.length=parseFloat(token))}}return tree}(data),leafNodes=function CountLeafNodes(tree){return tree.branchset?tree.branchset.map((function(child){return CountLeafNodes(child)})).reduce((function(a,b){return a+b})):1}(tree),outerRadius=3.77*leafNodes,innerRadius=outerRadius/4,svgHeight="circular"===layout?2*innerRadius+360:20*leafNodes,svgWidth="circular"===layout?2*innerRadius+360:2*leafNodes+250,height="circular"===layout?outerRadius:20*leafNodes*2,width="circular"===layout?innerRadius:leafNodes;return Object(react.useEffect)((function(){var cluster=d3.b().size([height/2,width]).separation((function(a,b){return 1})),root=d3.c(tree,(function(d){return d.branchset})).sum((function(d){return d.branchset?0:1})).sort((function(a,b){return a.value-b.value||d3.a(a.data.length,b.data.length)}));cluster(root),function setBrLength(d,y0,k){d.radius=(y0+=Math.max(d.data.length,0))*k,d.children&&d.children.forEach((function(d){setBrLength(d,y0,k)}))}(root,root.data.length=0,innerRadius/maxLength(root)),ref.current.innerHTML="";var svg=d3.e(ref.current).attr("font-family","sans-serif").attr("font-size",10);function linkStep(sx,sy,tx,ty){if("linear"===layout)return console.log({sx:sx,sy:sy,tx:tx,ty:ty}),"M".concat(sy," ").concat(sx,"V").concat(tx,"H").concat(ty);if("circular"===layout){var c0=Math.cos(sx=(sx-90)/180*Math.PI),s0=Math.sin(sx),c1=Math.cos(tx=(tx-90)/180*Math.PI),s1=Math.sin(tx);return"M\n          ".concat(sy*c0,"\n          ,\n          ").concat(sy*s0,"\n          ").concat(tx===sx?"":"A\n              ".concat(sy,"\n              ,\n              ").concat(sy,"\n               0 0\n              ").concat(tx>sx?1:0,"\n              ").concat(sy*c1,"\n              ,\n              ").concat(sy*s1),"\n          L\n          ").concat(ty*c1,"\n          ,\n          ").concat(ty*s1)}}function mouseovered(active){return function(d){d3.e(this).classed("label--active",active)}}"circular"===layout&&svg.attr("transform","translate(".concat(innerRadius+180,",").concat(innerRadius+180,")")),svg.append("g").attr("fill","none").attr("stroke","#000").selectAll("path").data(root.links()).join("path").attr("d",showBranchLength?function linkVariable(d){return linkStep(d.source.x,d.source.radius,d.target.x,d.target.radius)}:function linkConstant(d){return linkStep(d.source.x,d.source.y,d.target.x,d.target.y)}),svg.append("g").attr("fill","none").attr("stroke","#000").attr("stroke-opacity","0.2").selectAll("path").data(root.links().filter((function(d){return!d.target.children}))).enter().append("path").each((function(d){d.target.linkExtensionNode=this})).attr("d",showBranchLength?function linkExtensionVariable(d){return linkStep(d.target.x,d.target.radius,d.target.x,d.target.y)}:function linkExtensionConstant(d){return linkStep(d.target.x,d.target.y,d.target.x,d.target.y)}),"linear"===layout?svg.append("g").selectAll("text").data(root.leaves()).join("text").attr("x",(function(d){return d.y+5})).attr("y",(function(d){return d.x+4})).text((function(d){return(d.data.name||"").replace(/_/g," ")})).on("mouseover",mouseovered(!0)).on("mouseout",mouseovered(!1)).on("click",(function(d){clickName(d)})):"circular"===layout&&svg.append("g").selectAll("text").data(root.leaves()).join("text").attr("dy",".31em").attr("transform",(function(d){return"rotate(".concat(d.x-90,") translate(").concat(innerRadius+4,",0)").concat(d.x<180?"":" rotate(180)")})).attr("text-anchor",(function(d){return d.x<180?"start":"end"})).text((function(d){return(d.data.name||"").replace(/_/g," ")})).on("mouseover",mouseovered(!0)).on("mouseout",mouseovered(!1)).on("click",(function(d){clickName(d)})),function prepareConfig(root,treeheight,storechFn){var data={},leafdata=[];root.leaves().forEach((function(d){leafdata.push({name:d.data.name,x:d.x,y:d.y})})),data.leafloc=leafdata,data.treeheight=treeheight,storechFn(data)}(root,20*leafNodes,getConfig)}),[data,clickName,getConfig,showBranchLength,width,leafNodes,tree,layout,height,innerRadius]),react_default.a.createElement("svg",{width:svgWidth,height:svgHeight},react_default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .link--active {\n                stroke: #000 !important;\n                stroke-width: 1.5px;\n            }\n            .label--active {\n                font-weight: bold;\n            }"}}),react_default.a.createElement("g",{ref:ref}))}Tree.defaultProps={data:"",clickName:null,getChildLoc:null,ChangebranchLengthID:"notpossible",layout:"linear"},Tree.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{data:{defaultValue:{value:"''",computed:!1},required:!1},clickName:{defaultValue:{value:"null",computed:!1},required:!1},getChildLoc:{defaultValue:{value:"null",computed:!1},required:!1},ChangebranchLengthID:{defaultValue:{value:"'notpossible'",computed:!1},required:!1},layout:{defaultValue:{value:"'linear'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree.js"]={name:"Tree",docgenInfo:Tree.__docgenInfo,path:"src/components/Tree.js"})}},[[331,1,2]]]);
//# sourceMappingURL=main.f5ff8768dfbe4c7ea220.bundle.js.map