export const language = {
    display: {
        noData: 'No DATA!!!',
        loadingData: 'Loading data.',
        resizeHandleGuide: 'You can change the width of the column by mouse drag, ' +
                            'and initialize the width by double-clicking.'
    },
    net: {
        confirmCreate: 'Are you sure you want to create {{count}} data?',
        confirmUpdate: 'Are you sure you want to update {{count}} data?',
        confirmDelete: 'Are you sure you want to delete {{count}} data?',
        confirmModify: 'Are you sure you want to modify {{count}} data?',
        noDataToCreate: 'No data to create.',
        noDataToUpdate: 'No data to update.',
        noDataToDelete: 'No data to delete.',
        noDataToModify: 'No data to modify.',
        failResponse: 'An error occurred while requesting data.\nPlease try again.'
    }
}
export const theme = {
    grid: {
        background: '#fff',
        border: '#ccc',
        text: '#444'
    },
    selection: {
        background: '#4daaf9',
        border: '#004082'
    },
    toolbar: {
        border: '#ccc',
        background: '#fff'
    },
    scrollbar: {
        background: '#f5f5f5',
        thumb: '#d9d9d9',
        active: '#c1c1c1'
    },
    cell: {
        normal: {
            background: '#00ff00',
            border: '#e0e0e0'
        },
        head: {
            background: '#ff0000',
            border: '#ffff00'
        },
        editable: {
            background: '#fbfbfb'
        },
        selectedHead: {
            background: '#d8d8d8'
        },
        focused: {
            border: '#418ed4'
        },
        disabled: {
            text: '#b0b0b0'
        },
        evenRow: {
            background: '#fbfbfb'
        },
        currentRow: {
            background: '#e0ffe0'
        }
    }
};

export const options = {
    rowHeaders: ['checkbox']
};
export const optionsHeader = {
    header: {
        height: 120,
        complexColumns: [
            {
                title: 'Basic',
                name: 'mergeColumn1',
                childNames: ['name', 'artist']
            },
            {
                title: 'Extra',
                name: 'mergeColumn2',
                childNames: ['type', 'release', 'genre']
            },
            {
                title: 'Detail',
                name: 'mergeColumn3',
                childNames: ['mergeColumn1', 'mergeColumn2']
            },
            {
                title: 'Count',
                name: 'mergeColumn4',
                childNames: ['downloadCount', 'listenCount']
            },
            {
                title: 'Album Info',
                name: 'mergeColumn5',
                childNames: ['price', 'mergeColumn3', 'mergeColumn4']
            }
        ]
    }
}
export const columnsHeader = [
    {
        title: 'Name',
        name: 'name'
    },
    {
        title: 'Artist',
        name: 'artist'
    },
    {
        title: 'Type',
        name: 'type'
    },
    {
        title: 'Release',
        name: 'release'
    },
    {
        title: 'Genre',
        name: 'genre'
    },
    {
        title: 'Price',
        name: 'price'
    },
    {
        title: 'Download',
        name: 'downloadCount'
    },
    {
        title: 'Listen',
        name: 'listenCount'
    }
];
export const columnsInputType = [
    {
        title: 'Name',
        name: 'name',
        onBeforeChange: function(ev){
            console.log('Before change:' + ev);
        },
        onAfterChange: function(ev){
            console.log('After change:' + ev);
        },
        editOptions: {
            type: 'text',
            useViewMode: true
        }
    },
    {
        title: 'Artist',
        name: 'artist',
        onBeforeChange: function(ev){
            console.log('Before change:' + ev);
            ev.stop();
        },
        onAfterChange: function(ev){
            console.log('After change:' + ev);
        },
        editOptions: {
            type: 'text',
            maxLength: 10,
            useViewMode: false
        }
    },
    {
        title: 'Type',
        name: 'typeCode',
        onBeforeChange: function(ev){
            console.log('Before change:' + ev);
        },
        onAfterChange: function(ev){
            console.log('After change:' + ev);
        },
        editOptions: {
            type: 'select',
            listItems: [
                { text: 'Deluxe', value: '1' },
                { text: 'EP', value: '2' },
                { text: 'Single', value: '3' }
            ],
            useViewMode: true
        }
    },
    {
        title: 'Genre',
        name: 'genreCode',
        onBeforeChange: function(ev){
            console.log('Before change:' + ev);
        },
        onAfterChange: function(ev){
            console.log('After change:' + ev);
        },
        editOptions: {
            type: 'checkbox',
            listItems: [
                { text: 'Pop', value: '1' },
                { text: 'Rock', value: '2' },
                { text: 'R&B', value: '3' },
                { text: 'Electronic', value: '4' },
                { text: 'etc.', value: '5' }
            ],
            useViewMode: true
        },
        copyOptions: {
            useListItemText: true // when this option is used, the copy value is concatenated text
        }
    },
    {
        title: 'Grade',
        name: 'grade',
        onBeforeChange: function(ev){
            console.log('Before change:' + ev);
        },
        onAfterChange: function(ev){
            console.log('After change:' + ev);
        },
        copyOptions: {
            useListItemText: true
        },
        editOptions: {
            type: 'radio',
            listItems: [
                { text: '★☆☆☆☆', value: '1' },
                { text: '★★☆☆☆', value: '2' },
                { text: '★★★☆☆', value: '3' },
                { text: '★★★★☆', value: '4' },
                { text: '★★★★★', value: '5' }
            ],
            useViewMode: true
        }
    }
];
export const columns = [
    {
        title: 'Name',
        name: 'name',
        formatter: function(value) {
            return `<a>${value}</a>`;
        }
    },
    {
        title: 'Artist',
        name: 'artist'
    },
    {
        title: 'Type',
        name: 'type'
    },
    {
        title: 'Release',
        name: 'release'
    },
    {
        title: 'Genre',
        name: 'genre'
    }
];
export const columnsFormatter = [
    {
        title: 'Cover Image',
        name: 'id',
        align: 'center',
        formatter: function(value) {
            var albumId = value.toString();
            var imageId = albumId.substring(0, albumId.length - 2);
            var url = 'http://image.bugsm.co.kr/album/images/200/' + imageId + '/' + albumId + '.jpg'

            return '<img src="' + url + '" width="40" height="40" />';
        }
    },
    {
        title: 'Name',
        name: 'name',
        formatter: function(value, rowData) {
            var albumId = rowData.id;
            var url = 'http://music.bugs.co.kr/album/' + albumId;

            return '<a href="' + url + '" target="_blank">' + value + '</a>';
        }
    },
    {
        title: 'Artist',
        name: 'artist',
        formatter: function(value) {
            var url = 'http://search.bugs.co.kr/artist?q=' + value;

            return '<a href="' + url + '" target="_blank">' + value + '</a>';
        }
    },
    {
        title: 'Type',
        name: 'type'
    },
    {
        title: 'Release',
        name: 'release',
        formatter: function(value) {
            return value.replace(/\./g, '-');
        }
    },
    {
        title: 'Genre',
        name: 'genre'
    }
];
export const rowsSimple = [
    {
        name: 'Beautiful Lies',
        artist: 'Birdy'
    },
    {
        name: 'X',
        artist: 'Ed Sheeran'
    }
];
export const columnsSimple = [
    {
        title: 'Name',
        name: 'name',
    },
    {
        title: 'Artist',
        name: 'artist'
    }
];
export const rows = [
    {
        id: 549731,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'Pop',
        genreCode: '1',
        grade: '4',
        price: 10000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 436461,
        name: 'X',
        artist: 'Ed Sheeran',
        release: '2014.06.24',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'Pop',
        genreCode: '1',
        grade: '5',
        price: 20000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 295651,
        name: 'Moves Like Jagger',
        release: '2011.08.08',
        artist: 'Maroon5',
        type: 'Single',
        typeCode: '3',
        genre: 'Pop,Rock',
        genreCode: '1,2',
        grade: '2',
        price: 7000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 541713,
        name: 'A Head Full Of Dreams',
        artist: 'Coldplay',
        release: '2015.12.04',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'Rock',
        genreCode: '2',
        grade: '3',
        price: 25000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 265289,
        name: '21',
        artist: 'Adele',
        release: '2011.01.21',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'Pop,R&B',
        genreCode: '1,3',
        grade: '5',
        price: 15000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 555871,
        name: 'Warm On A Cold Night',
        artist: 'HONNE',
        release: '2016.07.22',
        type: 'EP',
        typeCode: '1',
        genre: 'R&B,Electronic',
        genreCode: '3,4',
        grade: '4',
        price: 11000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 550571,
        name: 'Take Me To The Alley',
        artist: 'Gregory Porter',
        release: '2016.09.02',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'Jazz',
        genreCode: '5',
        grade: '3',
        price: 30000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 544128,
        name: 'Make Out',
        artist: 'LANY',
        release: '2015.12.11',
        type: 'EP',
        typeCode: '2',
        genre: 'Electronic',
        genreCode: '4',
        grade: '2',
        price: 12000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 366374,
        name: 'Get Lucky',
        artist: 'Daft Punk',
        release: '2013.04.23',
        type: 'Single',
        typeCode: '3',
        genre: 'Pop,Funk',
        genreCode: '1,5',
        grade: '3',
        price: 9000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 8012747,
        name: 'Valtari',
        artist: 'Sigur Rós',
        release: '2012.05.31',
        type: 'EP',
        typeCode: '3',
        genre: 'Rock',
        genreCode: '2',
        grade: '5',
        price: 10000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 502792,
        name: 'Bush',
        artist: 'Snoop Dogg',
        release: '2015.05.12',
        type: 'EP',
        typeCode: '2',
        genre: 'Hiphop',
        genreCode: '5',
        grade: '5',
        price: 18000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 294574,
        name: '4',
        artist: 'Beyoncé',
        release: '2011.07.26',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'Pop',
        genreCode: '1',
        grade: '3',
        price: 12000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 317659,
        name: 'I Won\'t Give Up',
        artist: 'Jason Mraz',
        release: '2012.01.03',
        type: 'Single',
        typeCode: '3',
        genre: 'Pop',
        genreCode: '1',
        grade: '2',
        price: 7000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 583551,
        name: 'Following My Intuition',
        artist: 'Craig David',
        release: '2016.10.01',
        type: 'Deluxe',
        typeCode: '1',
        genre: 'R&B,Electronic',
        genreCode: '3,4',
        grade: '5',
        price: 15000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 490500,
        name: 'Blue Skies',
        release: '2015.03.18',
        artist: 'Lenka',
        type: 'Single',
        typeCode: '3',
        genre: 'Pop,Rock',
        genreCode: '1,2',
        grade: '5',
        price: 6000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 587871,
        name: 'This Is Acting',
        artist: 'Sia',
        release: '2016.10.22',
        type: 'EP',
        typeCode: '2',
        genre: 'Pop',
        genreCode: '1',
        grade: '3',
        price: 20000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 504288,
        name: 'Blurryface',
        artist: 'Twenty One Pilots',
        release: '2015.05.19',
        type: 'EP',
        typeCode: '2',
        genre: 'Rock',
        genreCode: '2',
        grade: '1',
        price: 13000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 450720,
        name: 'I\'m Not The Only One',
        artist: 'Sam Smith',
        release: '2014.09.15',
        type: 'Single',
        typeCode: '3',
        genre: 'Pop,R&B',
        genreCode: '1,3',
        grade: '4',
        price: 8000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 498896,
        name: 'The Magic Whip',
        artist: 'Blur',
        release: '2015.04.27',
        type: 'EP',
        typeCode: '2',
        genre: 'Rock',
        genreCode: '2',
        grade: '3',
        price: 15000,
        downloadCount: 1000,
        listenCount: 5000
    },
    {
        id: 491379,
        name: 'Chaos And The Calm',
        artist: 'James Bay',
        release: '2015.03.23',
        type: 'EP',
        typeCode: '2',
        genre: 'Pop,Rock',
        genreCode: '1,2',
        grade: '5',
        price: 12000,
        downloadCount: 1000,
        listenCount: 5000
    }
];
