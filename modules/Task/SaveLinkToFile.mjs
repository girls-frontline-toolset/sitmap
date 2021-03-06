import fs from "fs";

/** @param {url[]}urlList */
export default function SaveLinkToFile(urlList){
    let url = [];
    let twUrl = [];
    let cnUrl =[];
    let jaUrl =[];
    let enUrl =[];
    let urlImage = [];
    let twImageUrl = [];
    let cnImageUrl =[];
    let jaImageUrl =[];
    let enImageUrl =[];


    for (let i = 0; i < urlList.length; i++) {
        if(urlList[i].url.indexOf("/image/") > -1){
            urlImage.push(urlList[i].url);
        }else{
            url.push(urlList[i].url);
        }

        for (let j = 0; j < urlList[i].links.length; j++) {
            switch (urlList[i].links[j].lang) {
                case "zh-Hant":
                    if(urlList[i].links[j].url.indexOf("/image/") > -1){
                        twImageUrl.push(urlList[i].links[j].url);
                    }else{
                        twUrl.push(urlList[i].links[j].url);
                    }
                    break;
                case "zh-Hans":
                    if(urlList[i].links[j].url.indexOf("/image/") > -1){
                        cnImageUrl.push(urlList[i].links[j].url);
                    }else{
                        cnUrl.push(urlList[i].links[j].url);
                    }
                    break;
                case "ja":
                    if(urlList[i].links[j].url.indexOf("/image/") > -1){
                        jaImageUrl.push(urlList[i].links[j].url);
                    }else{
                        jaUrl.push(urlList[i].links[j].url);
                    }
                    break;
                case "en":
                    if(urlList[i].links[j].url.indexOf("/image/") > -1){
                        enImageUrl.push(urlList[i].links[j].url);
                    }else{
                        enUrl.push(urlList[i].links[j].url);
                    }
                    break;
            }
        }
    }

    fs.writeFileSync("./urlList/url.json",JSON.stringify(url));
    fs.writeFileSync("./urlList/url-tw.json",JSON.stringify(twUrl));
    fs.writeFileSync("./urlList/url-cn.json",JSON.stringify(cnUrl));
    fs.writeFileSync("./urlList/url-ja.json",JSON.stringify(jaUrl));
    fs.writeFileSync("./urlList/url-en.json",JSON.stringify(enUrl));
    fs.writeFileSync("./urlList/url-image.json",JSON.stringify(urlImage));
    fs.writeFileSync("./urlList/url-image-tw.json",JSON.stringify(twImageUrl));
    fs.writeFileSync("./urlList/url-image-cn.json",JSON.stringify(cnImageUrl));
    fs.writeFileSync("./urlList/url-image-ja.json",JSON.stringify(jaImageUrl));
    fs.writeFileSync("./urlList/url-image-en.json",JSON.stringify(enImageUrl));
}
