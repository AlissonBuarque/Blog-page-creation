

export default function Post() {
    return (
        <section>
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 p-4 mx-auto">
                        <input className="contPublic container  col-lg-10 p-4 mx-auto shadow rounded blockquote-custom-icon" tipe="text" name="publicações" />
                        <input className="buttonPublic m-2 p-3" type="button" name="btn-public" value="Public" onclick="javascript:window.close()" />
                    </div>
                </div>

                <div class="row">
                    <div className="col-lg-6 mx-auto">

                        <blockquote className="blockquote blockquote-custom  p-5 shadow rounded">
                            <div className="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                            <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
                            <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                            <icon><i className="fa-solid fa-heart"></i></icon>
                        </blockquote>
                        <span className="material-symbols-outlined">Like</span>
                        <span className="material-symbols-outlined">Comments</span>
                        <span className="material-symbols-outlined">Edit</span>
                        <span className="material-symbols-outlined">Delete</span>
                    </div>
                </div>
            </div>
        </section>
    );
};