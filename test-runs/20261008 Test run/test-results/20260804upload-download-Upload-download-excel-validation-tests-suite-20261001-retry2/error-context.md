# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260804upload-download.spec.js >> Upload download excel validation
- Location: PlayWrightAutomation\tests\20260804upload-download.spec.js:40:1

# Error details

```
Error: File not found: /Users/rahulshetty/downloads/download.xlsx
```

```
Error: ENOENT: no such file or directory, stat 'C:\Users\rahulshetty\downloads\download.xlsx'
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - 'heading "RAHUL SHETTY ACADEMY PRACTISE Note: Data will be reset after page refresh." [level=1] [ref=e6]':
      - text: RAHUL SHETTY ACADEMY PRACTISE
      - generic [ref=e7]: "Note: Data will be reset after page refresh."
  - generic [ref=e8]:
    - table [ref=e11]:
      - rowgroup [ref=e12]:
        - row [ref=e13]:
          - columnheader "S No ▲" [ref=e15] [cursor=pointer]:
            - generic [ref=e16]: S No
            - generic [ref=e17]: ▲
          - columnheader "Fruit Name ▲" [ref=e19] [cursor=pointer]:
            - generic [ref=e20]: Fruit Name
            - generic [ref=e21]: ▲
          - columnheader "Color ▲" [ref=e23] [cursor=pointer]:
            - generic [ref=e24]: Color
            - generic [ref=e25]: ▲
          - columnheader "Price ▲" [ref=e27] [cursor=pointer]:
            - generic [ref=e28]: Price
            - generic [ref=e29]: ▲
          - columnheader "Season ▲" [ref=e31] [cursor=pointer]:
            - generic [ref=e32]: Season
            - generic [ref=e33]: ▲
      - rowgroup [ref=e34]:
        - row [ref=e35]:
          - cell "1" [ref=e36]
          - cell "Mango" [ref=e38]
          - cell "Yellow" [ref=e40]
          - cell "299" [ref=e42]
          - cell "Summer" [ref=e44]
        - row [ref=e46]:
          - cell "2" [ref=e47]
          - cell "Apple" [ref=e49]
          - cell "Red" [ref=e51]
          - cell "345" [ref=e53]
          - cell "Winter" [ref=e55]
        - row [ref=e57]:
          - cell "3" [ref=e58]
          - cell "Papaya" [ref=e60]
          - cell "Orange" [ref=e62]
          - cell "187" [ref=e64]
          - cell "Spring" [ref=e66]
        - row [ref=e68]:
          - cell "4" [ref=e69]
          - cell "Banana" [ref=e71]
          - cell "Yellow" [ref=e73]
          - cell "69" [ref=e75]
          - cell "All" [ref=e77]
        - row [ref=e79]:
          - cell "5" [ref=e80]
          - cell "Kivi" [ref=e82]
          - cell "Green" [ref=e84]
          - cell "399" [ref=e86]
          - cell "Winter" [ref=e88]
        - row [ref=e90]:
          - cell "6" [ref=e91]
          - cell "Orange" [ref=e93]
          - cell "Orange" [ref=e95]
          - cell "199" [ref=e97]
          - cell "Summer" [ref=e99]
    - navigation [ref=e102]:
      - generic [ref=e103]: "Rows per page:"
      - combobox "Rows per page:" [ref=e105] [cursor=pointer]:
        - option "10" [selected]
        - option "15"
        - option "20"
        - option "25"
        - option "30"
      - generic [ref=e106]: 1-6 of 6
      - generic [ref=e107]:
        - button "First Page" [disabled] [ref=e108]
        - button "Previous Page" [disabled] [ref=e112]
        - button "Next Page" [disabled] [ref=e116]
        - button "Last Page" [disabled] [ref=e120]
  - generic [ref=e125]:
    - button "Download" [ref=e126] [cursor=pointer]
    - button "Choose File" [active] [ref=e127]
```

# Test source

```ts
  1  | const ExcelJs =require('exceljs');
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | async function writeExcelTest(searchText,replaceText,change,filePath)
  5  | {
  6  |     
  7  |   const workbook = new ExcelJs.Workbook();
  8  |   await workbook.xlsx.readFile(filePath);
  9  |   const worksheet = workbook.getWorksheet('Sheet1');
  10 |   const output= await readExcel(worksheet,searchText);
  11 | 
  12 |   const cell = worksheet.getCell(output.row,output.column+change.colChange);
  13 |   cell.value = replaceText;
  14 |   await workbook.xlsx.writeFile(filePath);
  15 | 
  16 | }
  17 | 
  18 | 
  19 | async function readExcel(worksheet,searchText)
  20 | {
  21 |     let output = {row:-1,column:-1};
  22 |     worksheet.eachRow((row,rowNumber) =>
  23 |     {
  24 |           row.eachCell((cell,colNumber) =>
  25 |           {
  26 |               if(cell.value === searchText)
  27 |               {
  28 |                   output.row=rowNumber;
  29 |                   output.column=colNumber;
  30 |               }
  31 |   
  32 |   
  33 |           }  )
  34 |     
  35 |     })
  36 |     return output;
  37 | }
  38 | //update Mango Price to 350. 
  39 | //writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
  40 | test('Upload download excel validation',async ({page})=>
  41 | {
  42 |   const textSearch = 'Mango';
  43 |   const updateValue = '350';
  44 |   await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
  45 |   const downloadPromise = page.waitForEvent('download');
  46 |   await page.getByRole('button',{name:'Download'}).click();
  47 |   await downloadPromise;
  48 |   writeExcelTest(textSearch,updateValue,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/download.xlsx");
  49 |   await page.locator("#fileinput").click();
> 50 |   await page.locator("#fileinput").setInputFiles("/Users/rahulshetty/downloads/download.xlsx");
     |   ^ Error: ENOENT: no such file or directory, stat 'C:\Users\rahulshetty\downloads\download.xlsx'
  51 |   const textlocator = page.getByText(textSearch);
  52 |   const desiredRow = await page.getByRole('row').filter({has :textlocator });
  53 |   await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | })
  75 | 
  76 | 
  77 | 
  78 | 
  79 | 
  80 | 
  81 | 
  82 | 
```