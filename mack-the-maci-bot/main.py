import discord
import os
from dotenv import load_dotenv
from server import keep_alive
from datetime import datetime

load_dotenv()
client = discord.Client()

banned_words = ['nigger', 'faggot', 'kike', 'spick', 'chink']


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    await send_message_to_channel('LOG', 'Mack lives at: {0}'.format(datetime.now().strftime("%D %H:%M:%S")))


@client.event
async def on_message(ctx):
    if ctx.author == client.user:
        return
    await profanity_check(ctx)
    await admin_commands(ctx)
    await easter_eggs(ctx)


async def clear(ctx):
    await ctx.channel.purge()


async def send_message_to_channel(channel, message):
    channel = client.get_channel(int(os.getenv(channel)))
    await channel.send(message)


async def profanity_check(ctx):
    if set(banned_words).intersection(set(ctx.content.lower().split())):
        await ctx.delete()
        await ctx.channel.send('Watch your profanity')
        report_string = f'{ctx.author.name}/{ctx.author.nick} said "{ctx.content}" in {ctx.channel.name}'
        await send_message_to_channel('REPORT', report_string)


async def admin_commands(ctx):
    if ctx.content.startswith('$whiskey_india_papa_echo'):
        if ctx.author.guild_permissions.administrator:
            await ctx.channel.send('Executing')
            await clear(ctx)
        else:
            await ctx.channel.send('you have no power here')


async def easter_eggs(ctx):
    if ctx.content.startswith('$hello'):
        await ctx.channel.send('Hello!')
    if 'bohurt is life' in ctx.content.lower():
        await ctx.channel.send('bohurt is love')
    if 'bohurt is love' in ctx.content.lower():
        await ctx.channel.send('bohurt is life')


keep_alive()
client.run(os.getenv('TOKEN'))
