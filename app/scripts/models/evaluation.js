'use strict';

/**
 * 
 */
angular.module('wcagReporter').factory('evalModel', function(
		evalScopeModel, evalExploreModel, evalSampleModel, 
		evalTestModel, evalReportModel) {

	var context = {
        '@vocab': 'http://www.w3.org/TR/WCAG-EM/#',
        'wcag20': 'http://www.w3.org/TR/WCAG20/#',
        'earl': 'http://www.w3.org/ns/earl#',
        'dct': 'http://purl.org/dc/terms/',
        'reporter': 'https://github.com/w3c/wcag-em-report-tool/blob/master/dataformat.md#',
        'conformanceTarget': {'id': 'step1b', 'type': 'id'},
        'evaluationScope':              {'id':   'step1'},
        'accessibilitySupportBaseline': {'id':   'step1c'},
        'additionalEvalRequirement':    {'id':   'step1d'},
        'siteScope':                    {'id':   'step1a'},
        'commonPages':                  {'id':   'step2a'},
        'essentialFunctionality':       {'id':   'step2b'},
        'pageTypeVariety':              {'id':   'step2c'},
        'otherRelevantPages':           {'id':   'step2e'},
        'structuredSample':             {'id':   'step3a'},
        'randomSample':                 {'id':   'step3b'},
        'specifics':                    {'id':   'step5b'},
        'auditResult':                  {'id':   'step4'},
        'outcome':                 {'type': 'id'},
        'subject':                 {'type': 'id'},
        'assertedBy':              {'type': 'id'},
        'testRequirement':         {'type': 'id'},
        'creator':                 {'type': 'id'},
        'handle': 'reporter:handle',
        'description': 'reporter:description',
        'tested': 'reporter:tested',
        'id': '@id',
        'type': '@type',
        'title': 'dct:title',
        'hasPart': 'dct:hasPart',   
        'specs': '@id',
        'reliedUponTechnology': 'wcag20:reliedupondef'
    };

	var evalModel = {
		id: undefined,
		context: context,
		scopeModel:   evalScopeModel,
		exploreModel: evalExploreModel,
		sampleModel:  evalSampleModel,
		testModel:    evalTestModel,
		reportModel:  evalReportModel,
		// This array collects data that is outside the evaluation
		// For example the author and external rdf data
		otherData: []
	};

    return evalModel;
});