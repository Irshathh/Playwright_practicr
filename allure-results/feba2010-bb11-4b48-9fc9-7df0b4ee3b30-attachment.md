# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handleIframes.spec.js >> Handle I Frames
- Location: tests\handleIframes.spec.js:3:1

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//div[@id="i21]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:5935:25)
    at InjectedScript._queryEngineAll (<anonymous>:6645:49)
    at InjectedScript.querySelectorAll (<anonymous>:6632:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:35)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//div[@id="i21]')

```