import experess from "express";

const app = experess();
const PORT =3000;

const equipment = [
    {id:1, name:'คอมพิวเตอร์',categoey:'computer'},
    {id:2, name:'ปริ้นท์เตอร์',categoey:'printer'},
    {id:3, name:'คีย์บอร์ด',categoey:'accessory'},
    {id:4, name:'คีย์บ',categoey:'acc'},
]

app.get("/api/equipment/:id",(req,res)=>{
    const id = Number(req.params.id);
    const result = equipment.find(e=>e.id==id);
    if (result) {
         res.status(200).json(result);
    }else{
         res.status(404).json({ message: "ไม่พบข้อมูล" })
    }
   
})

app.get("/api/equipment",(req,res)=>{
    const cat = req.query.category;
    const result = cat?equipment.filter(e=>e.categoey===cat) : equipment;
    res.status(200).json(result);
})

app.get("/api/equipment/num", (req, res) => {
    res.status(200).json({
        num: equipment.length
    });
});


app.get("/",(req,res)=>{
    res.send("Hello JAK")
})


app.listen(PORT, () => {
    console.log(`Server is running
        no http://localhost:${PORT}`)
} );