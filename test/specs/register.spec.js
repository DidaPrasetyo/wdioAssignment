import { expect, browser } from '@wdio/globals'

const url = 'https://www.zalora.co.id/customer/account/create/'
const validEmail = 'akunzalora@gmail.com'
const invalidEmail = 'inibukanemailhehe'
const validPassword = 'password'
const invalidPassword = '4aja'

// class getData {
//     get emailMsg () {
//         return $('div.error__client--email')
//     }
    
//     get pwdMsg () {
//         return $('error__client--password')
//     }

//     get genderMsg () {
//         return $('error__client--gender')
//     }

//     // get btnRegis() {
//     //     return $('#send')
//     // }
// }

describe('Register Negative Function Testing', function() {
    it('REG001 - Blank input', async function() {
        await browser.url(url)
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveText(expect.stringContaining('Masukkan alamat email yang valid'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveText(expect.stringContaining('Kata sandi Anda harus setidaknya 6 karakter.'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveText(expect.stringContaining('Pilih jenis kelamin'))
        await browser.pause(5000)
    })
    
    it('REG002 - invalid input', async function() {
        await browser.url(url)
        await $('#RegistrationForm_email').setValue(invalidEmail)
        await $('#RegistrationForm_password').setValue(invalidPassword)
        await $('#send').click()
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveText(expect.stringContaining('Masukkan alamat email yang valid'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveText(expect.stringContaining('Kata sandi Anda harus setidaknya 6 karakter.'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveText(expect.stringContaining('Pilih jenis kelamin'))
        await browser.pause(5000)
    })
    
    it('REG003 - Only input valid email', async function() {
        await browser.url(url)
        await $('#RegistrationForm_email').setValue(validEmail)
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveText(expect.stringContaining('Kata sandi Anda harus setidaknya 6 karakter.'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveText(expect.stringContaining('Pilih jenis kelamin'))
        await browser.pause(5000)
    })
    
    it('REG004 - Only input valid password', async function() {
        await browser.url(url)
        await $('#RegistrationForm_password').setValue(validPassword)
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveText(expect.stringContaining('Masukkan alamat email yang valid'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveText(expect.stringContaining('Pilih jenis kelamin'))
        await browser.pause(5000)
    })
    
    it('REG005 - Only input gender', async function() {
        await browser.url(url)
        await $('#RegistrationForm_gender_0').click()
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveText(expect.stringContaining('Masukkan alamat email yang valid'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveText(expect.stringContaining('Kata sandi Anda harus setidaknya 6 karakter.'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        await browser.pause(5000)
    })

    it('REG006 - Only blank email', async function() {
        await browser.url(url)
        await $('#RegistrationForm_password').setValue(validPassword)
        await $('#RegistrationForm_gender_0').click()
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveText(expect.stringContaining('Masukkan alamat email yang valid'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        await browser.pause(5000)
    })
    
    it('REG007 - Only blank password', async function() {
        await browser.url(url)
        await $('#RegistrationForm_email').setValue(validEmail)
        await $('#RegistrationForm_gender_0').click()
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveText(expect.stringContaining('Kata sandi Anda harus setidaknya 6 karakter.'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        await browser.pause(5000)
    })

    it('REG008 - Only blank gender', async function() {
        await browser.url(url)
        await $('#RegistrationForm_email').setValue(validEmail)
        await $('#RegistrationForm_password').setValue(validPassword)
        await $('#send').click()
        const emailMsg = await $('div.error__client--email')
        await expect(emailMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        const pwdMsg = await $('div.error__client--password')
        await expect(pwdMsg).toHaveAttribute('class', expect.stringContaining('hide'))
        const genderMsg = await $('div.error__client--gender')
        await expect(genderMsg).toHaveText(expect.stringContaining('Pilih jenis kelamin'))
        await browser.pause(5000)
    })

})