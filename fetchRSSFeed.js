
chrome.runtime.onMessage.addListener(
function(url, sender, onSuccess) {
    fetch("https://codingchallenges.substack.com/feed").then(result => result.text())
                               .then(str => new window.DOMParser().parseFromString(str,"text/xml"))
                               .then(inputData =>{
                                console.log(inputData);
                                const items = inputData.querySelectorAll("item");
                                let i = 1;
                                let html = ``;
                                items.forEach(el => {
                                    let link = el.querySelector("link").innerHTML;
                                    let arr = link.split("/");
                                    let header = arr[arr.length-1];
                                    console.log(header);
                                    if(i > 9) {
                                        return;
                                    }
                                    html += `
                                        <div class="item"> 
                                            <p> ${i}. </p>
                                            <a href="${link}">${header}</a>
                                        </div>
                                    `;
                                    i++;
                                });
                                document.getElementsByClassName("feedlist")[0].innerHTML = html;
                            });
                        });