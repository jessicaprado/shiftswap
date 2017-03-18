angular
	.module('shiftSwap.settings')
	.config(settingConfig);

function settingConfig($stateProvider) {
	$stateProvider.state({
		name: 'settings',
		url: '/settings',
		templateUrl: '/shiftSwap/features/settings/settings.html',
		controller: 'SettingsCtrl',
		controllerAs: 'SettingsVM'
	})
}