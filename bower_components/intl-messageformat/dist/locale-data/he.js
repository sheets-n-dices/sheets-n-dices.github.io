IntlMessageFormat.__addLocaleData({locale:"he",pluralRuleFunction:function(e,t){var a=String(e).split("."),l=a[0],n=!a[1],o=Number(a[0])==e,r=o&&a[0].slice(-1);return t?"other":1==e&&n?"one":2==l&&n?"two":n&&(0>e||e>10)&&o&&0==r?"many":"other"}});