IntlMessageFormat.__addLocaleData({locale:"mt",pluralRuleFunction:function(e,t){var a=String(e).split("."),l=Number(a[0])==e,n=l&&a[0].slice(-2);return t?"other":1==e?"one":0==e||n>=2&&10>=n?"few":n>=11&&19>=n?"many":"other"}});