import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import CheckButton from './CheckButton';
import { Link } from "react-router-dom";

import "./YourPhotos.css";

class YourPhotos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images,
            selectAllChecked: false
        };

        this.onSelectImage = this.onSelectImage.bind(this);
        this.getSelectedImages = this.getSelectedImages.bind(this);
        this.onClickSelectAll = this.onClickSelectAll.bind(this);
    }

    allImagesSelected (images){
        var f = images.filter(
            function (img) {
                return img.isSelected == true;
            }
        );
        return f.length == images.length;
    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });

        if(this.allImagesSelected(images)){
            this.setState({
                selectAllChecked: true
            });
        }
        else {
            this.setState({
                selectAllChecked: false
            });
        }
    }

    getSelectedImages () {
        var selected = [];
        for(var i = 0; i < this.state.images.length; i++)
            if(this.state.images[i].isSelected == true)
                selected.push(i);
        return selected;
    }

    onClickSelectAll () {
        var selectAllChecked = !this.state.selectAllChecked;
        this.setState({
            selectAllChecked: selectAllChecked
        });

        var images = this.state.images.slice();
        if(selectAllChecked){
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = true;
        }
        else {
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = false;

        }
        this.setState({
            images: images
        });
    }

    render () {
        return (
                <div style={{backgroundColor: "#c0aa3d"}}>
                <div className="row welcome-header-row">
                    <div className="col-sm-12 welcome-header">
                    <img style={{
                    width:"60px",
                    display:"inline",
                    marginLeft:"auto",
                    marginTop: "-15px",
                    marginRight:"20px"}} src="https://i.imgur.com/mSFQdT6.png" alt="PhotoSwami" />
                        <h1 className="font-1" style={{display: "inline", paddingTop: "20px", fontFamily: "Michroma", fontSize: "20pt"}}>PhotoSwami</h1>
                    </div>
                </div>
                <div style={{margin: "10px", marginTop: "50px", marginBottom:"30px"}}>
                    <h3>Here are todays photos from Bruno</h3> 
                </div>
                        {/* <div className="row" id="steps-row">
                            <div className="col-sm-4 parent-ht marg-bot-10">
                                <div className="photo-steps">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h3 className="font-1">Step 1</h3>
                                            <hr className="hr-white" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 steps-card-content">
                                            <h3 className="font-1">Take breathtaking photos (You've already done that!)</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 parent-ht marg-bot-10">
                            <div className="photo-steps">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="font-1">Step 2</h3>
                                        <hr className="hr-white" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 steps-card-content">
                                        <h3 className="font-1">Select your favorites!</h3>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-4 parent-ht marg-bot-10">
                            <div className="photo-steps">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="font-1">Step 3</h3>
                                        <hr className="hr-white" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 steps-card-content">
                                        <h3 className="font-1">Purchase your memories through our secure Stripe checkout!</h3>
                                    </div>
                                </div>
                            </div>
                                
                            </div>
                        </div> */}
                <CheckButton
            index={0}
            isSelected={this.state.selectAllChecked}
            onClick={this.onClickSelectAll}
            parentHover={true}
            color={"#2D2F33"}
            selectedColor={"#4285f4"}
            hoverColor={"#2D2F33"}/>
                <div style={{
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    color: "#2D2F33"
                }}>
                <h5>Select All Photos, or tap on the individual photos</h5>
                </div>
                <div style={{
                    padding: "2px",
                    color: "#2D2F33",
                    marginLeft:"15px",
                }}>Selected images: {this.getSelectedImages().toString()}</div>
                    <div id="your-photos-col">
                    <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    padding: "10%",
                    overflow: "auto"}}>
                <Gallery
            images={this.state.images}
            onSelectImage={this.onSelectImage}
            showLightboxThumbnails={true}/>
                </div>
                    </div>
                
                
                <div className="your-photo-collection box">
                    <img className="your-photo-collection-item" style={{
                        width:"80px",
                        display:"inline",
                        //marginLeft:"20px",
                        marginTop: "-15px",
                        // marginRight:"20px"
                        }} src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <img className="your-photo-collection-item" style={{
                        width:"80px",
                        display:"inline",
                        marginLeft:"20px",
                        marginTop: "-15px",
                        // marginRight:"20px"
                        }} src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <img className="your-photo-collection-item" style={{
                        width:"80px",
                        display:"inline",
                        marginLeft:"20px",
                        marginTop: "-15px",
                        // marginRight:"20px"
                        }} src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                
                </div>
                
                <div class="box">
                    <a class="button" href="#popup1">Checkout</a>
                </div>

                <div id="popup1" class="overlay">
                    <div class="popup">
                        <h2>Checkout</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            <Link
                                to="/postcheckout"
                                style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"//,
                                //fontSize: "2.8vw"
                                }}
                                className="hoverable accent-3 navbar-link">
                                PostCheckOut
                            </Link>
                        </div>
                    </div>
                </div>
                </div>          
            
        );
    }
}

YourPhotos.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

YourPhotos.defaultProps = {
    images: [
        {
            src: "https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 300,
            // tags: [{value: "Nature", title: "Nature"}, {value: "Flora", title: "Flora"}],
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        // {
        //     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        //     thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        //     thumbnailWidth: 100,
        //     thumbnailHeight: 100,
        //     caption: "Boats (Jeshu John - designerspics.com)"
        // },
        // {
        //     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        //     thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        //     thumbnailWidth: 100,
        //     thumbnailHeight: 100,
        //     caption: "Color Pencils (Jeshu John - designerspics.com)"
        // },
        // {
        //     src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
        //     thumbnail: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     caption: "Red Apples with other Red Fruit (foodiesfeed.com)"
        // },
        // {
        //     src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
        //     thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 183,
        //     caption: "37H (gratispgraphy.com)"
        // },
        // {
        //     src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
        //     thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
        //     thumbnailWidth: 240,
        //     thumbnailHeight: 320,
        //     tags: [{value: "Nature", title: "Nature"}],
        //     caption: "8H (gratisography.com)"
        // },
        // {
        //     src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        //     thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 190,
        //     caption: "286H (gratisography.com)"
        // },
        // {
        //     src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        //     thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 148,
        //     tags: [{value: "People", title: "People"}],
        //     caption: "315H (gratisography.com)"
        // },
        // {
        //     src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        //     thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     caption: "201H (gratisography.com)"
        // },
        // {
        //     src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        //     alt: "Big Ben - London",
        //     thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        //     thumbnailWidth: 248,
        //     thumbnailHeight: 320,
        //     caption: "Big Ben (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
        //     alt: "Red Zone - Paris",
        //     thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 113,
        //     tags: [{value: "People", title: "People"}],
        //     caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        //     alt: "Wood Glass",
        //     thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "Wood Glass (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        //     thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
        //     thumbnail: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 194,
        //     caption: "Old Barn (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
        //     alt: "Cosmos Flower",
        //     thumbnail: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        //     thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        //     thumbnailWidth: 271,
        //     thumbnailHeight: 320,
        //     caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
        //     thumbnail: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     tags: [{value: "Nature", title: "Nature"}, {value: "People", title: "People"}],
        //     caption: "Surfer Sunset (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        //     thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     tags: [{value: "People", title: "People"}, {value: "Sport", title: "Sport"}],
        //     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        //     thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
        //     thumbnail: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     caption: "Time to Think (Tom Eversley - isorepublic.com)"
        // },
        // {
        //     src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
        //     thumbnail: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 179,
        //     tags: [{value: "Nature", title: "Nature"}, {value: "Fauna", title: "Fauna"}],
        //     caption: "Untitled (Jan Vasek - jeshoots.com)"
        // },
        // {
        //     src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
        //     thumbnail: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 215,
        //     tags: [{value: "People", title: "People"}],
        //     caption: "Untitled (moveast.me)"
        // },
        // {
        //     src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        //     thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        //     thumbnailWidth: 257,
        //     thumbnailHeight: 320,
        //     caption: "A photo by 贝莉儿 NG. (unsplash.com)"
        // },
        // {
        //     src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        //     thumbnail: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_n.jpg",
        //     thumbnailWidth: 226,
        //     thumbnailHeight: 320,
        //     caption: "A photo by Matthew Wiebe. (unsplash.com)"
        // }
    ].splice(0,16)
    
};


//ReactDOM.render(<YourPhotos />, document.getElementById('YourPhotos'));
export default YourPhotos;