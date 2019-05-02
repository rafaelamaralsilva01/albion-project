const scrapper = require('./scrappers/albion-2d-scrapper');
const fs = require('fs');
const addressMeta = 'https://www.albiononline2d.com/en/meta';
const puppeteer = require('puppeteer');

(async function (){
    const browser = await puppeteer.launch({ headless: true });
    const SELECT_PAGINATION_LENGTH = '100';


    await scrapper.getAllMeta(
        browser,
        addressMeta, 
        SELECT_PAGINATION_LENGTH,
        async (methodName, result) => await fs.writeFileSync(methodName, JSON.stringify(result), 'utf8')
    );

    // await scrapper.getMetaTopTenPopularGearMassPvpLastSevenDays(
    //     metaPage,
    //     SELECT_PAGINATION_LENGTH,
    //     async (result) => {
    //         console.log(result);
    //         await fs.writeFileSync(
    //             'getMetaTopTenPopularGearMassPvpLastSevenDays',
    //             JSON.stringify(result),
    //             'utf8'
    //         );
    //     });

    // await scrapper.getMetaTopTenGearTenVsTenPvpLastSevenDays(
    //     browser,
    //     addressMeta,
    //     SELECT_PAGINATION_LENGTH, 
    //     async (result) => {
    //         console.log(result);
    //         await fs.writeFileSync(
    //             'getMetaTopTenGearTenVsTenPvpLastSevenDays',
    //             JSON.stringify(result),
    //             'utf8'
    //         );
    //     });

    // await scrapper.getMetaTopTenPopularGearSmallFiveVsFivePvpLastSevenDays(
    //     browser,
    //     addressMeta,
    //     SELECT_PAGINATION_LENGTH, 
    //     async (result) => {
    //         console.log(result);
    //         await fs.writeFileSync(
    //             'getMetaTopTenPopularGearSmallFiveVsFivePvpLastSevenDays',
    //             JSON.stringify(result),
    //             'utf8'
    //         );
    //     });

    // await scrapper.getMetaTopTenPopularGearTwoVsTwoPvpLastSevenDays(
    //         browser,
    //         addressMeta,
    //         SELECT_PAGINATION_LENGTH, 
    //         async (result) => {
    //             console.log(result);
    //             await fs.writeFileSync(
    //                 'getMetaTopTenPopularGearTwoVsTwoPvpLastSevenDays',
    //                 JSON.stringify(result),
    //                 'utf8'
    //             );
    //         });

    // await scrapper.getMetaTopPopularGearSoloPvpLastSevenDays(
    //     browser,
    //     addressMeta,
    //     SELECT_PAGINATION_LENGTH, 
    //     async (result) => {
    //         console.log(result);
    //         await fs.writeFileSync(
    //             'getMetaTopPopularGearSoloPvpLastSevenDays',
    //             JSON.stringify(result),
    //             'utf8'
    //         );
    //     });
        
    browser.close();
})();

