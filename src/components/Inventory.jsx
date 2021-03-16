const Inventory = () => {
  return(
    //  <!-- inventory section -->
      <section id="inventory" classNames="py-2">
        <div classNames="container inventory-inner">
          <div classNames="text-center py-3">
            <h1 classNames="title-dark">Our inventory</h1>
          </div>

          <p classNames="lead text-center">
            We offer huge variety of vehicles which you can enjoy
          </p>

          <div classNames="boxes py-3">
            <div classNames="box">
              <div classNames="vehicle">
                <img src="img/svg/car.svg" alt="" />
              </div>
              <div classNames="description">
                <h1>Cars</h1>
                <p classNames="">
                  From fuel efficient commuters to high powered sports cars and
                  luxury sedans, we can help you find the perfect car for your
                  situation.
                </p>
                <a href="#" classNames="btn-apply-dark">Apply now</a>
              </div>
            </div>

            <div classNames="box">
              <div classNames="vehicle">
                <img src="img/svg/minivan.svg" alt="" />
              </div>
              <div classNames="description">
                <h1>Minivans</h1>
                <p classNames="">
                  With seating for up to 7 and plenty of room for whatever you
                  may need to transport, a minivan makes the perfect family
                  vehicle.
                </p>
                <a href="#" classNames="btn-apply-dark">Apply now</a>
              </div>
            </div>

            <div classNames="box">
              <div classNames="vehicle">
                <img src="img/svg/truck.svg" alt="" />
              </div>
              <div classNames="description">
                <h1>Trucks</h1>
                <p classNames="">
                  Need to haul a trailer, just like helping your friends move?
                  Our dealers carry a wide variety of midsize and full-size
                  trucks from various manufacturers.
                </p>
                <a href="#" classNames="btn-apply-dark">Apply now</a>
              </div>
            </div>

            <div classNames="box">
              <div classNames="vehicle">
                <img src="img/svg/suv.svg" alt="" />
              </div>
              <div classNames="description">
                <h1>SUVs</h1>
                <p classNames="">
                  Looking for something suitable for city driving, but still
                  want that off-road capability? Let us help you get into the
                  perfect SUV. Compact to full-size, we have it!
                </p>
                <a href="#" classNames="btn-apply-dark">Apply now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Inventory;
