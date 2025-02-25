import generateRuleTests from '../../helpers/rule-test-harness.js';

generateRuleTests({
  name: 'require-lang-attribute',

  config: true,

  good: ['<html lang="en"></html>', '<html lang="en-US"></html>', '<html lang={{lang}}></html>'],

  bad: [
    {
      template: '<html></html>',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 0,
              "endColumn": 13,
              "endLine": 1,
              "filePath": "layout.hbs",
              "line": 1,
              "message": "The \`<html>\` element must have the \`lang\` attribute with a non-null value",
              "rule": "require-lang-attribute",
              "severity": 2,
              "source": "<html></html>",
            },
          ]
        `);
      },
    },
    {
      template: '<html lang=""></html>',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 0,
              "endColumn": 21,
              "endLine": 1,
              "filePath": "layout.hbs",
              "line": 1,
              "message": "The \`<html>\` element must have the \`lang\` attribute with a non-null value",
              "rule": "require-lang-attribute",
              "severity": 2,
              "source": "<html lang=\\"\\"></html>",
            },
          ]
        `);
      },
    },
  ],
});
