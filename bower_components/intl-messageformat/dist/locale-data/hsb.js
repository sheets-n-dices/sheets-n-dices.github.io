IntlMessageFormat.__addLocaleData({locale:"hsb",pluralRuleFunction:function(e,t){var l=String(e).split("."),a=l[0],o=l[1]||"",n=!l[1],r=a.slice(-2),c=o.slice(-2);return t?"other":n&&1==r||1==c?"one":n&&2==r||2==c?"two":n&&(3==r||4==r)||3==c||4==c?"few":"other"}});