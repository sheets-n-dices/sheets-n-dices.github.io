IntlMessageFormat.__addLocaleData({locale:"prg",pluralRuleFunction:function(e,l){var r=String(e).split("."),t=r[1]||"",a=t.length,n=Number(r[0])==e,o=n&&r[0].slice(-1),c=n&&r[0].slice(-2),i=t.slice(-2),s=t.slice(-1);return l?"other":n&&0==o||c>=11&&19>=c||2==a&&i>=11&&19>=i?"zero":1==o&&11!=c||2==a&&1==s&&11!=i||2!=a&&1==s?"one":"other"}});