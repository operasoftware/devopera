module Jekyll
  
  # StaticFile subclass that properly translates paths
  class PostFile < StaticFile
    def path
      File.join(@base, @name)
    end
  end

  class Postfiles < Generator
    safe true
    priority :lowest

    def generate(site)
      # if site.config['permalink'] != 'pretty'
      #   puts "Sorry, postfiles only work with pretty permalinks."
      #   puts "Change the setting in _config.yml to use postfiles."
      #   return
      # end

      site.posts.each do |post|
        # Go back to the single-file post name
        # postfile_id = post.id.gsub(/[\s\w\/%]*(\d{4})\/(\d\d)\/(\d\d)\/(.*)/, '\1-\2-\3-\4')
        postfile_id = post.id
        # Get the directory that files from this post would be in
        postfile_dir = File.join(site.config['source'], '_postfiles', postfile_id)
        
        # Add a static file entry for each postfile, if any
        Dir[File.join(postfile_dir, '/*')].each do |pf| 
          site.static_files << PostFile.new(site, postfile_dir, CGI.unescape(post.url), File.basename(pf))
        end
      end
    end

  end

  class PostfileTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      File.join(context['page']['url'], @text)
    end
  end
end

Liquid::Template.register_tag('postfile', Jekyll::PostfileTag)
