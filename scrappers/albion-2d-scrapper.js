var getMetaTopTenPopularGearMassPvpLastSevenDays = async (page, selectLength, callback) => {
    await page.select('select[name="DataTables_Table_0_length"]', selectLength);

    const top = await page.evaluate(() => {
        var rowsSelector = '#DataTables_Table_0 tr.odd, #DataTables_Table_0 tr.even';
        var elements = document.querySelectorAll(rowsSelector);

        return Array.from(elements).map(row => {
            var position = row.querySelectorAll('td')[0].textContent;

            var equipamentColumn = row.querySelectorAll('td')[1];
            var itens = Array
                .from(equipamentColumn.querySelectorAll('a img'))
                .map(img => img.getAttribute('data-src'));

            var score = row.querySelectorAll('td')[2].innerHTML;

            return {
                Position: position,
                Itens: itens,
                Score: score
            };
        });
    });

    callback('getMetaTopTenPopularGearMassPvpLastSevenDays', top);
};

var getMetaTopTenGearTenVsTenPvpLastSevenDays = async (page, selectLength, callback) => {
    await page.select('select[name="DataTables_Table_1_length"]', selectLength);

    const top = await page.evaluate(() => {
        var rowsSelector = '#DataTables_Table_1 tr.odd, #DataTables_Table_1 tr.even';
        var elements = document.querySelectorAll(rowsSelector);

        return Array.from(elements).map(row => {
            var position = row.querySelectorAll('td')[0].textContent;

            var equipamentColumn = row.querySelectorAll('td')[1];
            var itens = Array
                .from(equipamentColumn.querySelectorAll('a img'))
                .map(img => img.getAttribute('data-src'));

            var score = row.querySelectorAll('td')[2].innerHTML;

            return {
                Position: position,
                Itens: itens,
                Score: score
            };
        });
    });

    callback('getMetaTopTenGearTenVsTenPvpLastSevenDays', top);
};

var getMetaTopTenPopularGearSmallFiveVsFivePvpLastSevenDays = async (page, selectLength, callback) => {
    await page.select('select[name="DataTables_Table_2_length"]', selectLength);

    const top = await page.evaluate(() => {
        var rowsSelector = '#DataTables_Table_2 tr.odd, #DataTables_Table_2 tr.even';
        var elements = document.querySelectorAll(rowsSelector);

        return Array.from(elements).map(row => {
            var position = row.querySelectorAll('td')[0].textContent;

            var equipamentColumn = row.querySelectorAll('td')[1];
            var itens = Array
                .from(equipamentColumn.querySelectorAll('a img'))
                .map(img => img.getAttribute('data-src'));

            var score = row.querySelectorAll('td')[2].innerHTML;

            return {
                Position: position,
                Itens: itens,
                Score: score
            };
        });
    });

    callback('getMetaTopTenPopularGearSmallFiveVsFivePvpLastSevenDays', top);
};

var getMetaTopTenPopularGearTwoVsTwoPvpLastSevenDays = async (page, selectLength, callback) => {
    await page.select('select[name="DataTables_Table_3_length"]', selectLength);

    const top = await page.evaluate(() => {
        var rowsSelector = '#DataTables_Table_3 tr.odd, #DataTables_Table_3 tr.even';
        var elements = document.querySelectorAll(rowsSelector);

        return Array.from(elements).map(row => {
            var position = row.querySelectorAll('td')[0].textContent;

            var equipamentColumn = row.querySelectorAll('td')[1];
            var itens = Array
                .from(equipamentColumn.querySelectorAll('a img'))
                .map(img => img.getAttribute('data-src'));

            var score = row.querySelectorAll('td')[2].innerHTML;

            return {
                Position: position,
                Itens: itens,
                Score: score
            };
        });
    });

    callback('getMetaTopTenPopularGearTwoVsTwoPvpLastSevenDays', top);
};

var getMetaTopPopularGearSoloPvpLastSevenDays = async (page, selectLength, callback) => {
    await page.select('select[name="DataTables_Table_4_length"]', selectLength);

    const top = await page.evaluate(() => {
        var rowsSelector = '#DataTables_Table_4 tr.odd, #DataTables_Table_4 tr.even';
        var elements = document.querySelectorAll(rowsSelector);

        return Array.from(elements).map(row => {
            var position = row.querySelectorAll('td')[0].textContent;

            var equipamentColumn = row.querySelectorAll('td')[1];
            var itens = Array
                .from(equipamentColumn.querySelectorAll('a img'))
                .map(img => img.getAttribute('data-src'));

            var score = row.querySelectorAll('td')[2].innerHTML;

            return {
                Position: position,
                Itens: itens,
                Score: score
            };
        });
    });

    callback('getMetaTopPopularGearSoloPvpLastSevenDays', top);
}

var getAllMeta = async (browser, address, selectLength, callback) => {
    const page = await getPage(browser, address);

    await getMetaTopTenPopularGearMassPvpLastSevenDays(page, selectLength, callback);
    await getMetaTopTenGearTenVsTenPvpLastSevenDays(page, selectLength, callback);
    await getMetaTopTenPopularGearSmallFiveVsFivePvpLastSevenDays(page, selectLength, callback);
    await getMetaTopTenPopularGearTwoVsTwoPvpLastSevenDays(page, selectLength, callback);
    await getMetaTopPopularGearSoloPvpLastSevenDays(page, selectLength, callback);
};

var getPage = async (browser, address) => {
    const page = await browser.newPage();
    await page.goto(address, { "waitUntil": "networkidle0" });
    return page;
};

module.exports = {
    getAllMeta
}