
function OfferToken() {
  return (
    <main>
        <div  className="flex  flex-col  gap-5 lg:mr-5  xs:m-5   lg:m-0 "  data-aos = "fade-left">
            <span className="text-topicColor relative  topic-styles__before font-bold">درباره ما</span>
            <h1  className="text-titleColor text-3xl font-bold   mb-4">حراج  توکن</h1>
              <table  className="flex  gap-4">
        <thead>
            <tr  className="flex  flex-col items-start   text-nowrap  gap-4  font-bold  ">
                <th>نام :</th>
                <th>عنوان: </th>
                <th>نماد :  </th>
                <th>سطح  فکر :</th>
                <th>انتشار عمومی :</th>
            </tr>
        </thead>
        <tbody >
            <tr   className="flex  flex-col   text-nowrap  gap-4  font-bold   text-textColorGray">
                <td>کریپ تو لند توکن</td>
                <td className="number">ای آر سی  20</td>
                <td>آی کیو ان</td>
                <td>اتریوم</td>
                <td className="number">آی کیو ان 10000</td>
            </tr>

        </tbody>
    </table>
    <div  className="footer  flex  flex-col  gap-5  items-start">
        <h1  className="text-2xl  mt-4 ">توضیحات کلی </h1>
        <p  className="text-textColorGray  leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  </p>
        <p  className="text-textColorGray  leading-8">    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  </p>
        <button className="bg-BgColor text-textColor p-2  rounded-md  xs:w-full    ">خرید توکن</button>
    </div>
            
        </div>
    </main>
  )
}

export default OfferToken