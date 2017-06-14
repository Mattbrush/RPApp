/*   simple document for how to do basic tasks that  I will need to do a lot of throughout the making of this app */








// Adding a journal entry //
/* Make sure to change the number in the Journal to the correct type of journal entry it is. Make sure to use the EXACT name of the journal entry from the creator.js page */


    // Journal Entry Added
            var Journal = JSON.parse(localStorage.getItem('_Journal'));
            for (i = 0; i < Journal[4].Entries.length; i++) {
                if (Journal[4].Entries[i].Name == "Ben Wengel") {
                    Journal[4].Entries[i].Hidden = false;
                    console.log(Journal[4].Entries[i].Name +" Added To Jounral Local Storage !")
                }
            };
            localStorage.setItem('_Journal', JSON.stringify(Journal));
            localStorage.setItem('_Party', JSON.stringify(Party));
    // End Of Journal Entry Added


////////////////////////////////