; (function (trv, $) {
    "use strict";

    var sr = {
        controllerNotInitialized: 'Controller başlatılamadı.',
        noReportInstance: 'Rapor nesne örneği yok.',
        missingTemplate: 'ReportViewer şablonu eksik. Lütfen seçeneklerden templateUrl belirleyiniz.',
        noReport: 'Rapor Yok',
        noReportDocument: 'Rapor belgesi yok.',
        invalidParameter: 'Lütfen geçerli bir değer giriniz.',
        invalidDateTimeValue: 'Lütfen geçerli bir tarih giriniz.',
        parameterIsEmpty: 'Parametre değeri boş geçilemez.',
        cannotValidateType: 'Parametre tipi {type} doğrulanamadı.',
        loadingFormats: 'Yükleniyor...',
        loadingReport: 'Rapor Yükleniyor...',
        preparingDownload: 'Belge yükleme için hazırlanıyor. Lütfen bekleyiniz...',
        preparingPrint: 'Belge yazdırma için hazırlanıyor. Lütfen bekleyiniz...',
        errorLoadingTemplates: 'Rapor görüntüleyici şablonu hazırlanırken hata oluştu.',
        loadingReportPagesInProgress: 'Şimdiye kadar {0} sayfa yüklendi ...',
        loadedReportPagesComplete: 'Tamamlandı. Toplam {0} sayfa yüklendi.',
        noPageToDisplay: "Görüntülenecek sayfa yok.",
        errorDeletingReportInstance: 'Rapor nesne örneği silinirken hata oluştu: {0}',
        errorRegisteringViewer: 'Görüntüleyici servise kayıt olurken hata oluştu.',
        noServiceClient: 'Bu controller için belirlenmiş serviceClient yok.',
        errorRegisteringClientInstance: 'İstemci tarafında nesne örneği kayıt edilirken hata oluştu',
        errorCreatingReportInstance: 'Rapor nesne örneği alınırken hata oluştu. (Rapor = {0})',
        errorCreatingReportDocument: 'Rapor belgesi oluşturulurken hata oluştu. (Rapor = {0}; Biçim = {1})',
        unableToGetReportParameters: "Rapor parametreleri alınamadı.",
        errorObtainingAuthenticationToken: 'Kimlik doğrulama hatası',
        clientExpired: "İstemci oturumunu geri yüklemek için 'Yenile' ye tıklayınız.",

        //accessibility string resources
        ariaLabelPageNumberSelector: "Sayfa seçici. {0} sayfadan {1}. gösteriliyor",
        ariaLabelPageNumberEditor: "Sayfa numarası editörü.",
        ariaLabelExpandable: "Genişleyebilir",
        ariaLabelParameter: "parametre",
        ariaLabelErrorMessage: "Hata mesajı",
        ariaLabelParameterInfo: "{0} seçenek içeriyor.",
        ariaLabelMultiSelect: "Çoklu seçim",
        ariaLabelMultiValue: "Çoklu değer",
        ariaLabelSingleValue: "Tek değer",
        ariaLabelParameterDateTime: "TarihSaat",
        ariaLabelParameterString: "Metin",
        ariaLabelParameterNumerical: "Sayısal",
        ariaLabelParameterBoolean: "Mantıksal",
    };

    trv.sr = $.extend(trv.sr, sr);

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery));
