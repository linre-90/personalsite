/**
 * Defines <video-link></video-as-link> web component.
 * Component is combination of link, image and icon. 
 * Purpose of the component is to provide easy non gdpr consent requiring tag for linking video content.
 */

class VideoLink extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "video-link-wrapper");

        let videoLink = "https://www.youtube.com/watch?v=a3ICNMQW7Ok";
        let imageLink = "https://picsum.photos/640/360";

        if(this.hasAttribute("videoUrl")){
            videoLink = this.getAttribute("videoUrl");
        }

        if(this.hasAttribute("imgUrl")){
            imageLink = this.getAttribute("imgUrl");
        }

        wrapper.innerHTML = 
        `
            <a class="video-link-link" href="${videoLink}" target="_blank">
                <img class="video-link-image" src="${imageLink}" width="500" height="500" />
                <div class="video-link-desktop-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="#ff3333"
                        class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                </div>
                <div class="video-link-mobile-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#ff3333"
                        class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                </div>
            </a>
        `
        const style = document.createElement("style");
        style.textContent = 
        `
        .video-link-wrapper{
            width: 100%;
            height: 100%;
            max-width: 1600px;
            margin-left: auto;
            margin-right: auto;
        }

        .video-link-wrapper .video-link-link{
            display: block;
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 75%;
        }

        .video-link-wrapper .video-link-image{
            width: 100%;
            height: auto;
        }

        .video-link-desktop-icon, .video-link-mobile-icon{
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 0;
        }

        .video-link-desktop-icon{
            display: none;
            margin-left:-64px;
            margin-top: -64px;
        }

        .video-link-mobile-icon{
            margin-left: -32px;
            margin-top: -32px;
        }

        @media only screen and (min-width: 700px) {
            .video-link-wrapper .video-link-mobile-icon {
                display: none;
            }

            .video-link-wrapper .video-link-desktop-icon {
                display:block;
            } 
        }
        
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define("video-link", VideoLink);