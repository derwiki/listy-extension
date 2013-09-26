###listy-extension

#### Description

This is a Chrome extension that fills out a referral form on
*.apartmentlist.com/* and submits it:

```javascript
$('#full_name').val('Test Test');
$('#email').val('test@test.com');
$('#phone').val('216-368-3457');
$('#message').val('I am Looking to move soon!');
```

#### Installation
##### From Source
1. `git clone https://github.com/derwiki/listy-extension ~/listy-extension`
1. Load `chrome://extensions` in your browser
1. Click `Load unpacked extension...` and point to `~/listy-extension`

##### Chrome Web Store
https://chrome.google.com/webstore/detail/apartmentlist-test-form-f/gpfkdlpmmkbpofbmofnboigpfaojpnen

#### Usage
On apartmentlist.com web pages, a clickable Listy icon will appear on the right
in the location bar.
