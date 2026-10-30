import experess from "express";

const app = experess();
const PORT =3000;

const equipment = [
    {id:1, name:'คอมพิวเตอร์',categoey:'computer'},
    {id:2, name:'ปริ้นท์เตอร์',categoey:'printer'},
    {id:3, name:'คีย์บอร์ด',categoey:'accessory'},
    {id:4, name:'คีย์บ',categoey:'acc'},
]

app.get("/api/equipment",(req,res)=>{
    res.status(200).json(equipment);
})

app.get("/api/equipment/num", (req, res) => {
    res.status(200).json({
        num: equipment.length
    });
});


app.get("/",(req,res)=>{
    res.send("Hello JAK")
})


app.get("/myfriend",(req,res)=>{
    res.json([
        {
            id1: "07",
            name1: "กฤษดา บุญเหลือ",
        },
        {
            id2: "09",
            name2: "นายณภัทร โสธรรมมงคล",
        },
        {
            id3: "10",
            name3: "นายธนดล คล้ายรัศมี",
        },
        {
            id4: "11",
            name4: "นายธีทัต จันทร์สว่าง",
        },
        {
            id5: "12",
            name5: "นัฐพนธ์ ใจเย็น",
        },
        {
            id6: "13",
            name6: "นายปกรณ์เกียรติ อยู่พิทักษ์สกุล",
        },
        {
            id7: "14",
            name7: "นายปฏิพล เรืองชัย",
        },
        {
            id8: "15",
            name8: "ปิยะพงษ์ คลายลัดสหมี",
        },
        {
            id9: "18",
            name9: "นางสาวภัทราวรินทร์ ศรีน้อย",
        },
        {
            id10: "19",
            name10: "นายภูริพัฒน์ สุธรรมมา",
        },
        {
            id11: "20",
            name11: "นายภูวดล พลจารย์",
        },
        {
            id12: "22",
            name12: "นายศาศวัต แสงคำฉาย",
        },
        {
            id13: "23",
            name13: " นายอภิรักษ ศรีวัดทานัง",
        },
        {
            message: "Server isrunning"
        }
    ]
    )
})

app.listen(PORT, () => {
    console.log(`Server is running
        no http://localhost:${PORT}`)
} );