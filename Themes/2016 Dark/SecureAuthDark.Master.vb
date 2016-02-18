Imports System.Configuration
Imports System.Drawing.Color

Imports MFA.WebControls
Imports MFA.WebControls.FoundationClasses
Imports MFA.SecureAuth.Resource
Imports SecureAuth.Environment

Public Class SecureAuthDark
    Inherits Global.SecureAuth.Web.MasterBase

    Public Property UserIDText() As String
        Get
            Return UserIDLabel.Text
        End Get
        Set(ByVal value As String)
            UserIDLabel.Text = value
        End Set
    End Property

    Public Property BodyTag() As HtmlGenericControl
        Get
            Return body
        End Get
        Set(ByVal value As HtmlGenericControl)
            body = value
        End Set
    End Property

    Public ReadOnly Property SessionLengthMinutes As Integer
        Get
            Return Session.Timeout
        End Get
    End Property

    Public ReadOnly Property SessionExpireDestinationUrl As String
        Get
            Return "../Restart.aspx"
        End Get
    End Property

    Protected Overrides Sub OnPreRender(ByVal e As EventArgs)
        MyBase.OnPreRender(e)
        'Me.Head1.Controls.Add(New LiteralControl(String.Format("<meta http-equiv='refresh' content='{0};url={1}'>", SessionLengthMinutes * 60, SessionExpireDestinationUrl)))
    End Sub


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim userLang As String = HttpContext.Current.Session("UserLanguage")
        Try
            Dim title As String = ApplianceEnvironment.Title
            If title.Trim() = "" Then
                title = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_title", title)
            End If
            Dim header As String = ApplianceEnvironment.HeaderText
            If header.Trim() = "" Then
                header = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_header", header)
            End If
            Page.Title = title
            lblTop.Text = header

            If Session("imageURL") IsNot Nothing AndAlso Not String.IsNullOrEmpty(Session("imageURL")) Then
                LogoImage.ImageUrl = Session("imageURL")
            Else
                LogoImage.ImageUrl = ApplianceEnvironment.LogoPath
            End If

            If Session("masterCssURL") IsNot Nothing AndAlso Not String.IsNullOrEmpty(Session("masterCssURL")) Then
                csslink.Href = Session("masterCssURL")
            Else
                Dim cssVersion As String = "?version=" + ApplianceEnvironment.FullVersion
                csslink.Href = "MFAStyleSheet.css" + cssVersion
            End If
        Catch

        End Try

        Try
            Dim forgotUserNameExist As Boolean = Not MFA.Utilities.Tools.ReadBooleanAppSettings("ShowForgotUsernameLink") AndAlso Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("ForgotUsernameURL"))
            Dim forgotPasswordExist As Boolean = Not MFA.Utilities.Tools.ReadBooleanAppSettings("ShowForgotPasswordLink") AndAlso Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("PasswordResetURL"))
            If forgotUserNameExist Then
                ForgotUsernameLink.Attributes.Add("a href", ConfigurationManager.AppSettings("ForgotUsernameURL"))
                ForgotUsernameLink.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_forgotusername", "Forgot Username")
            End If

            If forgotPasswordExist Then
                ForgotPasswordLink.Attributes.Add("a href", ConfigurationManager.AppSettings("PasswordResetURL"))
                ForgotPasswordLink.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_forgotpassword", "Forgot Password")
            End If
        Catch ex As Exception

        End Try

        Try
            Select Case MFA.Utilities.Tools.ReadIntAppSettings("RestartLogin")
                Case 1
                    LinkButton1.ID = "lbRestart_" + CurrentContext.Machine.Current.ID.ToString()
                    LinkButton1.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_restart", "Restart Login")
                    LinkButton1.Attributes.Add("a href", ResolveClientUrl("~/restart.aspx"))
                    LinkButton1.Visible = True
                    LinkButton2.Visible = False
                Case 2
                    LinkButton2.ID = "lbRestart_" + CurrentContext.Machine.Current.ID.ToString()
                    If Not Session("UserIDLabel") Is Nothing Then
                        LinkButton2.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_logout", "Logout")
                    Else
                        LinkButton2.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_restart", "Restart Login")
                    End If
                    LinkButton2.Attributes.Add("a href", ResolveClientUrl("~/restart.aspx"))
                    LinkButton1.Visible = False
                    LinkButton2.Visible = True
                Case 3
                    If Not Session("UserIDLabel") Is Nothing Then
                        LinkButton2.ID = "lbRestart_" + CurrentContext.Machine.Current.ID.ToString()
                        LinkButton2.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_logout", "Logout")
                        LinkButton2.Attributes.Add("a href", ResolveClientUrl("~/restart.aspx"))
                        LinkButton1.Visible = False
                        LinkButton2.Visible = True
                    Else
                        LinkButton1.ID = "lbRestart_" + CurrentContext.Machine.Current.ID.ToString()
                        LinkButton1.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_restart", "Restart Login")
                        LinkButton1.Attributes.Add("a href", ResolveClientUrl("~/restart.aspx"))
                        LinkButton1.Visible = True
                        LinkButton2.Visible = False
                    End If
                Case Else
                    LinkButton1.Visible = False
                    LinkButton2.Visible = False
            End Select
        Catch ex As Exception

        End Try

        Try
            If Not Session("UserIDLabel") Is Nothing Then
                UserIDText = Session("UserIDLabel").ToString()
            End If
        Catch ex As Exception

        End Try

        Try
            Dim copyright As String = ApplianceEnvironment.CopyRight
            If copyright.Trim() = "" Then
                copyright = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_copyright", copyright)
            End If
            'CopyrightText.InnerText = copyright
            CopyRightLabel.Text = copyright
        Catch ex As Exception

        End Try

        Try
            Dim EULAURL As String = ApplianceEnvironment.EULALink
            If Not EULAURL.Trim() = "" Then
                EULALinkButton.Text = ClientLanguage.LocalLanguage.GetText(userLang, "masterpage_eula", "EULA")
                EULALinkButton.OnClientClick = "javascript:window.open('" + EULAURL + "');"
            End If
        Catch ex As Exception

        End Try

    End Sub
End Class