import {test} from '@playwright/test';

test('Handling JS Alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',(Dialog)=>{
        console.log(Dialog.type());
        console.log(Dialog.message());
        if(Dialog.type()==='alert'){
            Dialog.accept();
        }
        else if(Dialog.type()==='confirm'){
            Dialog.dismiss();
        }
        else{
            Dialog.accept('Ganesh');
        }
    })

    await page.getByRole('button',{name:"Click for JS Alert"}).click();
    await page.getByText('Click for JS Confirm').click();
    await page.getByText('Click for JS Prompt').click();

})