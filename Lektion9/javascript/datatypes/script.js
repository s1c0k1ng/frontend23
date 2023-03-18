/* 
    DEKLARERING AV VARAIABLER
    -----------------------------------------------------

    Javascript använder sig av camelCase

    camelCase       firstCase        js, java, c, c++ 
    PascalCase      FirstName        pascal, vb, c#
    snake_case      first_name       python
    kebab-case      first-name       css, powershell

    
    var     goblal variabel                         var firstName = "King"
    let     lokalt scoped deklarerad varibel        { let firstName = "King" }   
    const   är konstant och kan inte omdeklareras   const firstName = "King"

    
    DATA TYPER
    -------------------------------------------------------

        nvarchar(50)
        varchar(50)

        n   =  unicode/utf-8/åäö
        var =  0 till 50 
        char = string

        char(10)        = 10          1b
        varchar(10)     = 0-10        1b + 2

        nchar(10)       = 10          1b * 2
        varchar(10)     = 0-10        1b * 2 + 2 
    --------------------------------------------------------

    JS                                   C#                                                 SQL
    ---------------------------------------------------------------------------------------------------------------------
    String                              String                                              char, varchar, nvarchar, nchar, text, ntext
    Number                              byte,sbyte,short,ushort,int,long,uint,ulong         tinyint, smallint, int, bigint
    Number                              float, double, decimal                              real,decimal,money
    Boolean                             bool                                                bit
    Object                              object
    Undefined                           ---
    null                                null
*/    


/*
    String - till för text
    -----------------------
    ""  citat       "";     => text
    ''  enkel       '';     => enskilt tecken
    ``  back-ticks  $``;    => placeholder
*/        

let firstName = "King"
let lastName = 'Sico'
let email = `king@domain.com`

var sentence = "Hej jag heter... och... i...."
var sentence = "Hej jag heter " + firstName + "" + lastName + "och" + email
var sentence = `Hej jag heter ${firstName} ${lastName}`
